"use strict";


const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};
log("test", "else", 4, "ul", 88);


function calcDouble(number, basis = 2) {
    console.log(number * basis);
}
calcDouble(4);