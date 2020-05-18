// Дано целое число. Вывести все целые числа от 1 до 100, квадрат которых не превышает числа N

const myNumber = parseInt(prompt('Enter your digit'));

for ( i=1; i * i <= myNumber; i++ ) {
   console.log(i)
   } 
