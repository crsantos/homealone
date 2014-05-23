/*
* @Author: crsantos
* @Date:   2014-05-23 18:56:01
* @Last Modified by:   crsantos
* @Last Modified time: 2014-05-23 19:04:29
*/

var gpio = require("pi-gpio");

function sleep(time, callback) {

  var stop = new Date().getTime();
  while(new Date().getTime() < stop + time) {

      ;
  }
  callback();
}

gpio.open(3, "output", function(err) {              // Open pin 3 for output

  console.log("Opened 3");
  gpio.write(3, 1, function() {                   // Set pin 3 high (1)
    console.log("wrote 3");

    sleep(1000, function() {

      gpio.close(3);                                // Close pin 3
      console.log("Closed 3!");

      gpio.open(5, "output", function(err) {        // Open pin 5 for output
        console.log("Opened 5");
        gpio.write(5, 1, function() {               // Set pin 5 high (1)
          console.log("wrote 5");
          gpio.close(5);                          // Close pin 5
          console.log("Closed 5!");
        });
      });
    });

  });
});