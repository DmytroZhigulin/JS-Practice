// Дано число. Определить, заканчивается оно четной цифрой или нечетной? Вывести последнюю цифру.

let someDigit = parseInt(prompt('Enter some digit'));
let lastDigit = ( someDigit % 10 );
console.log(lastDigit);
console.log( lastDigit % 2 === 0 ? 'The number is even' : 'The number is not even');


