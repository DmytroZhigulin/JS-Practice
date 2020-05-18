// 1) Создать скрипт для сложения, вычитания, умножения и деления двух чисел и вывода результатов 
// let digit1 = parseInt(prompt('Введите число'));
// let digit2 = parseInt(prompt('Введите еще одно число'));


// alert(` Результатом умножения будет , ${digit1*digit2}`);
// alert(` Результатом деления будет , ${digit1/digit2}`);
// alert(` Результатом сложения будет , ${digit1+digit2}`);
// alert(` Результатом вычитания будет , ${digit1-digit2}`);



// 2) Создать скрипт, получающий два значения и выводящий true, если значения равны, false - если нет. Ввод чисел из п1. 
// alert(digit1===digit2);



// 3) Определить среднее арифметическое трех чисел. Ввод  первых двух чисел из п1.
// let digit3 = parseInt(prompt('Введите третее число'));
// alert((digit1+digit2+digit3)/3);



// 4) Получить от пользователя 3 строки и вывести их в произвольном порядке одной командой (конкатенация)
// let digit1 = prompt("Напиши");
// let digit2 = prompt('Еще');
// let digit3 = prompt('И еще');

// console.log(digit1);
// console.log(digit2);
// console.log(digit3);
// alert(digit1+ ' ' + digit2 + ' ' + digit3);



// 5) Разложить по цифрам пятизначное число и вывести в исходном порядке через пробел.
let someDigit = parseInt(prompt('Введите пятизначное число'));
console.log(someDigit);
let digit5 = ( someDigit % 10 ); //3
someDigit -=digit5; // someDigit = someDigit - digit5
someDigit /=10;    // someDigit = someDigit / 10; убираем 0 в конце после вычитания
console.log(someDigit);
let digit4 = ( someDigit % 10 ); //5
someDigit -=digit4;
someDigit /=10;
console.log(someDigit);
let digit3 = ( someDigit % 10 ); //2
someDigit -=digit3;
someDigit /=10;
console.log(someDigit);
let digit2 = ( someDigit % 10 ); //5
someDigit -=digit2;
someDigit /=10;
console.log(someDigit); //2
console.log( someDigit + ' ' + digit2 + ' ' + digit3 + ' ' + digit4 + ' ' + digit5);


