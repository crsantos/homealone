/*
* @Author: crsantos
* @Date:   2014-05-30 23:41:35
* @Last Modified by:   crsantos
* @Last Modified time: 2014-06-01 23:26:05
*/

function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

define("APPNAME", 'homealone');
define("username", 'username');
define("password", 'password');
define("PIN1", 3); // GPIO Pin #0
define("PIN2", 5); // GPIO Pin #1