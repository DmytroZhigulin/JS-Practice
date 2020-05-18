// Бюджет на месяц + расчет бюджета на день в вычетом обязательных расходов.

let budget = prompt("Ваш бюджет на месяц?");
let date = prompt("Введите дату в формате YYYY-MM-DD");

// console.log(budget);
// console.log(date);


let appData = {
    sum: budget,
    period: date,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings: false
} ;

// console.log(appData);


let expensesName = prompt("Введите обязательную статью расходов в этом месяце");
let expensesBudget = prompt("“Во сколько обойдется?”");

// console.log(expensesName);
// console.log(expensesBudget);


// добавляем значения в объект expenses.
appData.expenses[expensesName] = expensesBudget; 


// высчитываем бюджет с учетом обязательных расходов
appData.sum = appData.sum - expensesBudget;

// Высчитываем итоговый бюджет на день
console.log(` Ваш бюджет на день составляет ${appData.sum / 30}`);


