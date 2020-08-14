"use strict";

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
    console.log(`User ${this.name} is gone`);
}; //Метод наследования прототипа (ООП)

const ivan = new User('Ivan', 25);
const mary = new User('Mary', 32);
const damien = new User('Damien', 33);

console.log(ivan);
console.log(mary);
console.log(damien);

mary.exit();
damien.hello();




