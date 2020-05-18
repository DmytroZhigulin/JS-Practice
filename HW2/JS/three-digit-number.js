// Дано трехзначное число. 
//--- Определить является ли четной сумма его цифр. 
// ---Определить, кратна ли сумма его цифр пяти. 
// ---Определить является ли произведение его цифр больше 100. 

let myDigit = parseInt(prompt('Enter three digit number'));
let d1 = myDigit % 10;
myDigit -= d1;
myDigit /= 10;
let d2 = myDigit % 10;
myDigit -= d2;
myDigit /= 10;

console.log( ( myDigit + d2 + d1 ) % 2 === 0 ? 'Even' : 'Not even');//Четная ли сумма?

console.log( ( myDigit + d2 + d1 ) % 5 === 0 ? 'Even' : 'Not even');// Кратна ли сумма 5?


let digit = myDigit * d2 * d1;
const N1 = 100;
console.log( digit > 100 ? 'More' : 'Less');//Произведение > 100?


