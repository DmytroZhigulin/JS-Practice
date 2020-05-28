"use strict";

let numberOfFilms;
let userRang;

function start() {

    numberOfFilms = +prompt("How much films you have watched?", "0");

    while( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Insert correct number please", "0");
    }
}
start();


let personalMovieDB = {
    userLevel: userRang,
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: true,
};


function rangUserCount() {

    if ( personalMovieDB.count >= 1 && personalMovieDB.count < 10 ) {

        personalMovieDB.userLevel = "beginner";
        alert("You've watched quite a few films");

    } else if ( personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {

        personalMovieDB.userLevel = "basic";
        alert("You're a classic viewer");

    } else if ( personalMovieDB.count > 30 ) {

        personalMovieDB.userLevel = "pro";
        alert("You're big film fan!");
    } else {

        alert("ERROR");
        
    }
}
rangUserCount();

    


let filmName,
    filmRate;




function rememberMyFilms() {

    for( let i = 0; i < 10;) {

        filmName = prompt("Last seen movie?");
        filmRate = prompt("Rate last movie");

        if ( filmName != null && filmRate != null && filmName != '' && filmRate != '' && filmName.length < 50 ) {

            personalMovieDB.movies[filmName] = filmRate;
            // alert("Nice!!!!");

            const more = confirm("Add one more movie?") ? i++ : i=10; // Тернарный оператор.

        } else {

            alert("Fill all fields please!");
            i--;
        }
  
    }

        // do {
        //     filmName = prompt("Last seen movie?");
        //     filmRate = prompt("Rate last movie");

        //     if ( filmName != null && filmRate != null && filmName != '' && filmRate != '' && filmName.length < 50 ) {

        //         personalMovieDB.movies[filmName] = filmRate;
        //         console.log("Nice!!!!")

        //     } else {
        //         console.log("ERRRORRRRRRRRR!")
        //     }
                
        // } while ( confirm("Add one more movie?") === true );
}
rememberMyFilms();



let myGenre;
let genreNum = 1;


function writeYourGenres() {

    for ( let i = 0; i < 3; i++) {

        myGenre = prompt(`Your favorite genre number ${genreNum}`);
        // вместо genreNum можно указать просто i, i = 1; i <=3; i++.

        if (myGenre != '' && myGenre != null) {

            console.log("GOOD");
            personalMovieDB.genres.push(myGenre);
            genreNum++; // увеличиваем значение переменной на 1

        } else {

            alert("Please, enter genre");
            i--; //Возвращаемся на шаг назад
        }
    }
}
writeYourGenres();





    
function showMyDB() {
    personalMovieDB.private === false ? console.log(personalMovieDB) : console.log("This is a privat account");
}
showMyDB();

// Или так
// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB)
//     } else {
//         console.log("This is a privat account");
//     }
// }
// showMyDB(personalMovieDB.private)



// console.log(personalMovieDB);


    


