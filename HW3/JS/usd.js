// Один доллар стоит 27 гривен. Вывести таблицу с расчетом стоимости 10, 20, 30... 100 долларов

const usd = 27;
let row = '';
let i = 10;

for(  ; i <= 100 ; i+=10 ) {
    row = row +  i + '*' + usd + '=' + i * usd + '\n';  
}   console.log(row);