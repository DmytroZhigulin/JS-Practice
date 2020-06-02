"use strict";

//ЗАМЫКАНИЯ

// let apple = {
//     price: 1400,
// }

// let sumsung = {
//     price: 1100,
// }


// function getPrice(price) {
//     return function(num) {
//         return num * price;
//     };
// }

// let applePrice = getPrice(apple.price);
// let sumsungPrice = getPrice(sumsung.price);

// console.log(applePrice(+prompt('')));


function getNum(month) {
    return function() {
        let q = +prompt('Month budget?');
        return 'your day budget = ' + (q / month) + 'uah';
    };
}

let monthDay = getNum(31);


console.log(monthDay());