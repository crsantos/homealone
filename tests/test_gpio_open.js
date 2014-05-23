/*
* @Author: crsantos
* @Date:   2014-05-23 18:56:01
* @Last Modified by:   crsantos
* @Last Modified time: 2014-05-24 00:30:58
*/

var gpio = require("pi-gpio");

if ( process.argv.length == 4 ) {

  var pinNumber = process.argv[2]
  var state     = process.argv[3] == 1 ? 1 : 0

  gpio.open(pinNumber, "output", function(err) {              // Open pin 3 for output
    console.log("Opened " + pinNumber);

      gpio.read(pinNumber, function(err, value) {

        if(err) {
          throw err;
        }
        console.log("Read: "+ value);    // The current state of the pin
        var newValue = 1 - value;
        gpio.write(pinNumber, newValue, function() {                     // Set pin 3 high (1)
          console.log("wrote "+newValue+" to " + pinNumber);
          gpio.close(pinNumber);
        });

      });
  });

} else {

    console.log("Error. Usage: " + process.argv[0] + "filename $PIN_NUMBER [1|0]");
}

