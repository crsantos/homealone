/*
* @Author: crsantos
* @Date:   2014-05-23 18:56:01
* @Last Modified by:   crsantos
* @Last Modified time: 2014-05-30 23:26:45
*/

var gpio = require("pi-gpio");

if ( process.argv.length == 3 ) {

  var pinNumber = process.argv[2]

  console.log("Trying to read " + pinNumber);

  gpio.read(pinNumber, function(err, value) {

    if(err) {
      throw err;
    }
    console.log("Read: "+ value); // The current state of the pin

  });

} else {

    console.log("Error. Usage: " + process.argv[0] + "filename $PIN_NUMBER [1|0]");
}

