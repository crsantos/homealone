/*
* @Author: crsantos
* @Date:   2014-05-23 18:56:01
* @Last Modified by:   crsantos
* @Last Modified time: 2014-05-30 23:13:03
*/

var gpio = require("pi-gpio");

if ( process.argv.length == 4 ) {

  var pinNumber = process.argv[2]
  var state     = process.argv[3] == 1 ? 1 : 0

  gpio.open(pinNumber, "output", function(err) {              // Open pin 3 for output
    console.log("Opened " + pinNumber);

    gpio.write(pinNumber, state, function() {                     // Set pin 3 high (1)
      console.log("wrote "+state+" to " + pinNumber);
      gpio.close(pinNumber);
    });

  });

} else {

    console.log("Error. Usage: " + process.argv[0] + "filename $PIN_NUMBER [1|0]");
}

