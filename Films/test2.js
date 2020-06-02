"use strict";


let data,
    exName, 
    setNum,
    repNum;


const myProg = {
    date: '',
    exercise: {},
    time: '1h 30min',
    morning: true,
    evening: false,
    bodyType: {
        type: 'bulk',
        weight: 50,
    }

};

const {type, weight} = myProg.bodyType;
console.log(weight);
console.log(type);



progStart();


function progStart() {

    data = prompt('Enter date');


    if ( data === '' || data === null) {
        delete myProg.date;
    } else {
        myProg.date = data;
    }


    for ( let i = 1; i < 10;) {

        exName = prompt(`Name ${i} exercise`); 

        if( exName != null && exName != '') {

            setNum = +prompt(`How many sets of ${exName} you do? `, '0');

                while( setNum == '' || setNum == null || isNaN(setNum)) {
                    setNum = +prompt("Insert correct number of sets please", "0");
                }

            repNum = +prompt(`And how many reps in every set of ${setNum}`, '0');

                while( repNum == '' || repNum == null || isNaN(repNum)) {
                    repNum = +prompt("Insert correct number of reps please", "0");
                }


            myProg.exercise[i] = {
                name: exName,
                sets: setNum,
                reps: repNum,
            };

            
            
        } else {

            alert('Enter name');

        }

        const add = confirm("Add exercise?") ? i++ : i=10;
           
    }

    console.log(myProg);
    
}


console.log(Object.keys(myProg)); // Возвращает массив свойств объекта


let counter = 0;
for ( let key in myProg) {

        if ( typeof(myProg[key]) === 'object') {
    
            for( let i in myProg[key]) {
                console.log(`Вложенное свойство ${i}, имеет значение ${myProg[key][i]}`);
                 //не срабатывает ${myProg[key][i]}
                 counter++;
            }
        } else {
    
            console.log(`Свойство ${key}, имеет значение ${myProg[key]} `);
            counter++;
            
        }
    }


console.log(counter);