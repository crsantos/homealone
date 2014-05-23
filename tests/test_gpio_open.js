/*
* @Author: crsantos
* @Date:   2014-05-23 18:56:01
* @Last Modified by:   crsantos
* @Last Modified time: 2014-05-23 19:41:56
*/

var gpio = require("pi-gpio");

var pinNumber = process.argv[2]

if (pinNumber) {

  gpio.read(pinNumber, function(err, value) {
    if(err) {
      throw err;
    }
    console.log(value);    // The current state of the pin
  });

  gpio.open(pinNumber, "output", function(err) {              // Open pin 3 for output
    console.log("Opened " + pinNumber);
    gpio.write(pinNumber, 0, function() {                     // Set pin 3 high (1)
      console.log("wrote zero to " + pinNumber);
      gpio.close(pinNumber);
    });
  });

};

