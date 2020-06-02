"use strict";


let sums = {
    name: 'Sumsung',
    model: "Note 10",
    storage: '128GB',
    color: 'black',
    new: true,
    price: 1200,

    changePrice: function() {
        sums.price = +prompt('new price');
        console.log(sums);
    },
};

let apple = {
    name: 'I-phone',
    model: "11 Pro",
    storage: '128GB',
    color: 'Space Green',
    new: true,
    price: 1450,


    changePrice: function() {
        apple.price = +prompt('new price');
        console.log(apple);
    },
};

console.log(sums,apple);


// Замыкание
// function getPrice(price) {
//     return function(num) {
//         return num * price;
//     };
// }

// let applePrice = getPrice(apple.price);
// let sumsPrice = getPrice(sums.price);

// console.log(applePrice(+prompt('')));




let totalDiscount,
    totalPrice;


function shop() {

    let ask;

    for ( let i = 1; i < 10;) {

        ask = prompt("What brand you want to by?");


        if ( ask === "apple" || ask === "Apple" || ask === "Sumsung" || ask === "sumsung" &&
        ask != '' && ask != null) {
            // console.log(ask);
            i=10;
        } else {
            alert("ERROR");
        }
    }


    let count = +prompt(`How many ${ask} phones you want to by? `);

    
        if ( count <=2 && count != '' && count != null && ask === "apple" || ask === "Apple" ) { 

            // console.log("apple");
            totalPrice = count * apple.price;
            console.log(` ${count} phones of ${ask} brand will cost ${totalPrice} usd`);
    
    
        } else if ( count <=2 && count != '' && count != null && ask === "sumsung" || ask === "Sumsung" ) {
    
            // console.log("Sumsung");
            totalPrice = count * sums.price;
            
            console.log(` ${count} phones of ${ask} brand will cost ${totalPrice} usd`);
    
        } else if ( count > 2 && count != '' && count != null && ask === "sumsung" || ask === "Sumsung" ) {
    
            alert ("You got discount 15%!");
            totalPrice = count * sums.price;
            totalDiscount = totalPrice - (totalPrice / 100 * 15);
            console.log(` ${count} phones of ${ask} brand, with 15% discount will cost ${totalDiscount} usd`);

        } else if ( count > 2 && count != '' && count != null && ask === "apple" || ask === "Apple" ) {
    
            alert ("You got discount 15%!");
            totalPrice = count * apple.price;
            totalDiscount = totalPrice - (totalPrice / 100 * 15);
            console.log(` ${count} phones of ${ask} brand, with 15% discount will cost ${totalDiscount} usd`);
            
        } else {
            alert ("ERROR");
        }
                
}


