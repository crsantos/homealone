/*
* @Author: crsantos
* @Date:   2014-05-23 18:56:01
* @Last Modified by:   crsantos
* @Last Modified time: 2014-05-23 19:36:15
*/

var gpio = require("pi-gpio");

var pinNumber = process.argv[2]

if (pinNumber) {

  gpio.open(pinNumber, "output", function(err) {              // Open pin 3 for output
    console.log("Opened " + pinNumber);
    gpio.write(pinNumber, 1, function() {                   // Set pin 3 high (1)
      console.log("wrote one to " + pinNumber);
      gpio.close(pinNumber);
    });
  });

};
