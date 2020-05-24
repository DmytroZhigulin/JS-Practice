// Бюджет на месяц + расчет бюджета на день в вычетом обязательных расходов.

let budget = prompt("Ваш бюджет на месяц?");
let date = prompt("Введите дату в формате YYYY-MM-DD");


let appData = {
    sum: budget,
    period: date,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings: false
} ;



for ( let i = 0 ; i < 5 ;) {

    let a = prompt("Введите обязательную статью расходов в этом месяце");
    let b;

    if ( (typeof(a)) === 'string' && a != '') {
        console.log('good');
        b = prompt("“Во сколько обойдется?”");

        appData.expenses[a] = b;

        appData.sum = appData.sum - b;
        
    } else if ( (typeof(a)) === 'number' ){
        alert('Назовите категорию корректно!')
        
    }

    
    let c = confirm ("Внести еще пункт расходов?") ? i++ : i = 5; // тернарный оператор

    // if ( c === false) {
    //     i = 5
    // } else (
    //     i++
    // ) или же более длинное написание той же проверки

    
    
}

console.log(appData)


alert(` Ваш бюджет на день составляет ${appData.sum / 30}`);