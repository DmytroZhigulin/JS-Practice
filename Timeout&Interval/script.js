// const timerId = setTimeout( function() {
//     console.log('hello');
// }, 2000);


// const timerId = setTimeout( function(text) {
//     console.log(text);
// }, 2000, 'hello');
// clearInterval(timerId);// удаляет значение интервала 2000 в функции


// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout( logger , 2000 );
//     timerId = setInterval( logger , 2000 );
// });




// function logger() {
//     if ( i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
    
// }




// let id = setTimeout(function log() {
//     console.log('hello');
//     id = setTimeout( log, 1000);  
// }, 1000);// Рекурсивный setTimeout




const btn = document.querySelector('.btn');
let timerId,
    i = 0;
  
    function myAnimation() {
    const elem  = document.querySelector('.box');
    let pos = 0;

    const id = setInterval( frame, 10);
    function frame() {
        if( pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

