/*
* @Author: crsantos
* @Date:   2014-05-23 18:56:01
* @Last Modified by:   crsantos
* @Last Modified time: 2014-05-23 19:28:24
*/

var gpio = require("pi-gpio");

gpio.open(3, "output", function(err) {              // Open pin 3 for output

  console.log("Opened 3");
  gpio.write(3, 0, function() {                   // Set pin 3 high (1)
    console.log("wrote zero to 3 ");
    gpio.close(3);

  });

});