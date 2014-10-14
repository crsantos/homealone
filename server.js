/*
* @Author: crsantos
* @Date:   2014-05-31 17:18:09
* @Last Modified by:   crsantos
* @Last Modified time: 2014-06-01 23:36:48
*/

// Imports
var restify = require('restify')
, userSave  = require('save')('user')
, gpio      = require("pi-gpio")
, constants = require("./constants")
, crypto    = require('crypto')
, bunyan    = require("bunyan");

// Logger
var log = bunyan.createLogger({
  name: constants.APPNAME,
  level: process.env.LOG_LEVEL || 'info',
  streams: [
    {
      stream: process.stdout,
      level: 'debug'
    },
    {
      path: 'hello.log',
      level: 'trace'
    }
  ],
  serializers: bunyan.stdSerializers
});

// Handlers
function respond(req, res, next) {

  if (isNaN(req.params.status) || isNaN(req.params.number)) {

    return next(new restify.InvalidArgumentError('Status and number must be supplied'));

  }

  gpio.open(constants.PIN2, "output", function(err) {        // Open pin X for output
      gpio.write(constants.PIN2, status, function() {        // Set pin X to the desired state
          gpio.close(constants.PIN2);                        // Close pin X
        });
  });

  res.send({'acted':req.params.number,'status':req.params.status});
  next();
}

function findUsers(req, res, next) {

  userSave.find({}, function (error, users) {
    res.send(users)
  })
}

// Instantiate server with options
var server = restify.createServer({ name: constants.APPNAME});
server.use(restify.authorizationParser())
  .use(restify.dateParser())
  .use(restify.queryParser())
  .use(restify.jsonp())
  .use(restify.gzipResponse())
  .use(restify.fullResponse())
  .use(restify.bodyParser())
  .use(restify.acceptParser(server.acceptable))
  .use(restify.conditionalRequest())
  .use(restify.throttle({
    burst: 1,
    rate: 1,    // limit 1 request/second
    ip: true,
    overrides: {
      '127.0.0.1': {
        rate: 0,        // unlimited
        burst: 0
      }
    }
  }));

server.pre(function (req, res, next) {
  req.log.info({req: req}, 'start');
  return next();
});

server.on('after', restify.auditLogger({ log: log }));

server.use(function authenticate(req, res, next) {
  // call redis or something here
  log.info("authenticating with "+ req.authorization.scheme + ": " + req.authorization.credentials);
  var format = constants.username+":"+constants.password;
  var md5 = crypto.createHash('md5').update(format).digest("hex");
  var authorized = (md5 === req.authorization.credentials);
  if (!authorized) {
    return next(new restify.NotAuthorizedError("DontBeEvil"));
  };
  next();
});

// Define routes
server.put('/blind/:number/:status', respond);
server.get('/user', findUsers);

// Start server
server.listen(8080, function() {
  log.info('%s listening at %s', server.name, server.url);
});