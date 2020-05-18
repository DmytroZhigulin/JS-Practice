// Известны два расстояния. Одно в километрах, другое - в футах (1 фут = 0,305м). Какое расстояние меньше?

let kilometers = parseInt(prompt('Enter distance in kilometers'));
let feets = parseInt(prompt('Enter distance in feets'));
const C = 0.305;
const D = 0.001;
let meters = ( feets * C );
let kilometers2 = ( meters * D );

if ( kilometers < kilometers2) {
    console.log('Kilometers less!');
} else if ( kilometers > kilometers2 ) {
    console.log('Less feet!');
} else ( kilometers === kilometers2) 
    console.log('Same distance!!!')




