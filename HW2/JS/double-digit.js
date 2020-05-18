// Дано двузначное число. Определить, какая из его цифр больше: первая или вторая?

let Digit = parseInt(prompt('Enter double digit'));
let D1 = (Digit % 10);
let D2 = (Digit - D1) / 10;

if ( D1 > D2) {
    console.log('D1');
} else if ( D2 > D1) {
    console.log('D2');
} else {
    alert('oops! \n They are equal!')
}

