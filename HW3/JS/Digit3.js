// Дано некоторое число. Определить, является ли оно степенью числа 3.

let myNumber = parseInt(prompt('Введите число'));

while (myNumber > 1) {
    myNumber /= 3;
    console.log(myNumber);
}
if (myNumber === 1) {
    alert('Число является степенью тройки ');
} else 
    alert('Число не является степенью тройки ');
