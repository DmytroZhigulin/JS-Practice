'use strict';

const now = new Date();

now.setFullYear(2024);
now.setHours(4);
now.setMonth(11);
console.log(now);


// console.log(now.getFullYear());
// // console.log(now.getUTCFullYear());
// console.log(now.getMonth());
// // console.log(now.getUTCMonth());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getTime());


console.log(now.getTimezoneOffset());

let nowDate = new Date('2020-05-01');
// new Date.parse('2020-05-01');// вернет то же что и nowDate

console.log(nowDate);

let start = new Date();

for ( let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(`отработал за ${end - start} миллисекунт`);