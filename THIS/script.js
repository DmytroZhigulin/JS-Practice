"use strict";

// 1) Обычная функция - this = глабальному объекту window, но если use strict то тогда this = undefined.
// function showThis() {
//     console.log(this);
// }
// showThis();
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b; //Замыкание
//         // return this.a + this.b;

//     }
//     console.log(sum());// Что возвращает функция sum
// }
// showThis(4, 5);


// // 2) Контекст вызова (this) у метода объекта = сам объект.
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
//     // sum: function() {
//     //     function sum2() {
//     //         console.log(this);
//     //     }
//     //     sum2();// Вернет undefined т.к это просто функция внутри метода (п1). 
//     // }
// };
// obj.sum();


// // 3) this в конструкторах и классах - это новый экземпляр объекта
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// const ivan = new User('Ivan', 25);


// // 4) Ручная привязка this - call, apply, bind
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith'); //в методе call - дополнительные аргументы передаем через запятую
// sayName.apply(user, ['Smith']); //в методе apply - дополнительные аргументы передаем в массиве


// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);// bind передает в контекст this - значение 2
// console.log(double(3));// Вызываем функцию и передаем значение 3 в num


//Немного практики

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this); 
    this.style.backgroundColor = 'green';
});
// в данном случае контекст вызова this возвращает объект на который повесили обработчик

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);// В данном случае контекст вызова ссылается на родительский объект
            console.log(this.num);// Соответственно в таком случае контекст вызова ссылается на значение ключа num родительского объекта
        };
        say();
    }   
};
obj.sayNumber();

const double = a => a * 2;
console.log(double(4));