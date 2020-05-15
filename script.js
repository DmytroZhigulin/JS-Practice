"use strict"


let budget = prompt("Ваш бюджет на месяц?");
let date = prompt("Введите дату в формате YYYY-MM-DD");

console.log(budget);
console.log(date);


let appData = {

    sum: '',
    period: '',
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings: false
} ;


appData["sum"] = budget;
appData["period"] = date;

console.log(appData);

let expensesName = prompt("Введите обязательную статью расходов в этом месяце");
let expensesBudget = prompt("“Во сколько обойдется?”");

console.log(expensesName);
console.log(expensesBudget);