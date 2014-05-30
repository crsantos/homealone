/*
* @Author: crsantos
* @Date:   2014-05-23 18:56:01
* @Last Modified by:   crsantos
* @Last Modified time: 2014-05-30 23:36:04
*/

var gpio = require("pi-gpio");

if ( process.argv.length == 3 ) {

  var pinNumber = process.argv[2]

  console.log("Trying to read " + pinNumber);

  gpio.read(pinNumber, function(err, value) {

    if(err) {

      console.log(err);

    } else{

      console.log("Read: "+ value); // The current state of the pin
    }

    gpio.close(pinNumber);

  });

} else {

    console.log("Error. Usage: " + process.argv[0] + "filename $PIN_NUMBER [1|0]");
}

