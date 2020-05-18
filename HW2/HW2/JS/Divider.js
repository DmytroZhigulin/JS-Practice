// Определить, является ли число a делителем числа b ? И наоборот. (Дать два ответа)


let A = parseInt(prompt('Enter first digit'));
let B = parseInt(prompt('Enter second digit'));

if ( A % B === 0) {
    console.log('число B является делителем A');
} else if ( B % A === 0) {
    console.log('число A является делителем B');
} else {
    console.log('числа не являются делителями')
}