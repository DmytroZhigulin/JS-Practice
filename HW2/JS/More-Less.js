// Даны два различных числа. Определить какое из них больше, а какое меньше.

let A = parseInt(prompt('Enter first number'));
let B = parseInt(prompt('Enter second number'));
if ( A>B) {
    alert('First number is greater!');
}  else if ( B>A) {
    alert('Second digit is greater!');
} else {
    alert('Numbers are equal!');
}
