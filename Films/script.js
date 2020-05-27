"use strict";

const numberOfFilms = +prompt("How much films you have watched?", "0");


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

    if ( personalMovieDB.count >= 1 && personalMovieDB.count < 10 ) {
        alert("You've watched quite a few films");
    } else if ( personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
        alert("You're a classic viewer");
    } else if ( personalMovieDB.count > 30 ) {
        alert("You're big film fan!");
    } else {
        alert("ERROR");
    }


let filmName,
    filmRate;

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


console.log(personalMovieDB);


    


