/*
* @Author: crsantos
* @Date:   2014-05-30 23:41:35
* @Last Modified by:   crsantos
* @Last Modified time: 2014-05-30 23:42:13
*/

function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

define("PIN1", 11); // GPIO Pin #0
define("PIN2", 12); // GPIO Pin #1