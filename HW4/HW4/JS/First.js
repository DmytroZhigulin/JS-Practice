// Создать массив, длину и элементы которого задаёт пользователь.
//  Затем отсортировать массив по возрастанию. 
// Затем, удалить элементы из массива с 2 по 4. По мере изменений, выводить содержимое массива на страницу.

let myArr = [], element;


for ( let j = 0; j>0; j++); {
    j = parseInt(prompt('Please, enter the length of array'));
    document.write('Length of array = ' + j );
        for (let i = 0; i < j; i++) {
        element = parseInt(prompt('Enter digit'));
        myArr.push(element);
    }
}
document.write('</p>' + myArr + '</p>');
document.write('</p>' + myArr.sort() + '</p>');

if ( myArr.length >= 4); {
    myArr.splice(2, 3);
}

document.write('</p>' + myArr + '</p>');
document.write('Length of array = ' + myArr.length);