/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов 

6) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;

7) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

8) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

9) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

10) Фильмы должны быть отсортированы по алфавиту */

'use strict';


document.addEventListener('DOMContentLoaded', () => {



    const movieDB = {
        movies: [
            "Пианист",
            "Мстители",
            "Хоббит",
            "Властелин колец",
            "Хэловин",
            "Веном",
            "Стражи галактики",
            "Железный человек",
            "Американская история X",
            
        ],
        
    };


    const rec = document.querySelector('.promo__adv'),
          promoContent = document.querySelector('.promo__content'),
          genre = document.querySelector('.promo__genre'),
          poster = document.querySelector('.promo__bg'),
          movieList = document.querySelector('.promo__interactive-list'),
          form = document.querySelector('.add'),
          input = form.querySelector('.adding__input'),
          btn = form.querySelector('button'),
          checkbox = form.querySelectorAll('input')[1];


    
    //1) Удалить все рекламные блоки со страницы
    const delRec = (arr) => {
        arr.remove();
        promoContent.style.width = 'calc(100% - 300px)';
    };
    delRec(rec);
    

    
    // 2) Изменить жанр фильма, поменять "комедия" на "драма"
    // 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
    // Реализовать только при помощи JS
    const makeChanges = () => {

        genre.innerHTML = 'Драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';

    };
    makeChanges();


    
    //4) Список фильмов на странице сформировать на основании данных из этого JS файла.
    // Отсортировать их по алфавиту 
    // 5) Добавить нумерацию выведенных фильмов
    // 10) Фильмы должны быть отсортированы по алфавиту 
    const sortArr = (arr) => {
        arr.sort();
        console.log(arr);
    };
    sortArr(movieDB.movies);
    
        //функция формирующая новый HTML список
    function createMovieList(films, parent) {

        parent.innerHTML = '';

        sortArr(movieDB.movies);    //функция сортировки массива фильмов

        films.forEach((item, index) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${index + 1} ${item}
                    <div class="delete"></div>
                </li>`;
        });

            //функция удаления фильма из списка
        movieList.querySelectorAll('.delete').forEach((item, index) => {    

            item.addEventListener('click', () => {

                movieDB.movies.splice(index, 1); 
                
                createMovieList(movieDB.movies, movieList);
                
            });   
        });

    }
    createMovieList(movieDB.movies, movieList);


    // 6) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    // новый фильм добавляется в список. Страница не должна перезагружаться.
    // Новый фильм должен добавляться в movieDB.movies.
    // Для получения доступа к значению input - обращаемся к нему как input.value;

    const click = function(event) {

        event.preventDefault();

        let newFilm = input.value;

        if ( newFilm ) {   // ( input.value != '' && input.value != null )

            // 9) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
            // "Добавляем любимый фильм"
            if ( checkbox.checked === true) {
                console.log('Добавляем любимый фильм');
            }
             
            // 7) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
            if ( newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,22)}...`;

            }

            movieDB.movies.push(newFilm);
            
            sortArr(movieDB.movies); //функция сортировки массива фильмов

            createMovieList(movieDB.movies, movieList); //функция формирующая новый HTML список

        } else {
            console.log("bad value of input");
        }
        
    };
    btn.addEventListener('click', click);

});





 




