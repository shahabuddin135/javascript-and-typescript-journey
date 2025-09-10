// var // you can change & also reassign the variable. (mutable)
// let , you can change the value of the variable (mutable)
// const // constant , you cannot change a variable value with const keyword (immutable)


// let fruit = "apple"

// let fruit = "orange"

//fruit = "banana" // reassinging a value

//variables are containers, which stores some data.


// console.table(fruit)


//folder is also called a directory


// var toy = "car"

// let toy = "dinasour"

// var toy = "car"

const car = "pink jeep"

// car = "black jeeb" // not allowed

// console.log(car);

// Number 
// String // primitive data types
// Boolean


// let nam; 

// console.log(nam);


// let cars = null

// console.log(cars);


let smallNumber = 123;
// console.log(smallNumber);

let bigNumber = 17868876876687687686866868678687678
// console.log(bigNumber);

//memory
// *-*-**-- => "areeba" => 000x0
// 10101010
// on off on off
// +-+--+-

var one = "Areeba, saeeda yaseen sana" // 00X01


// let fruit1 = "apple"
// let fruit2 = "banana"
// let fruit3 = "orange"
// let fruit4 = "strawberry"

// OBJECT // groups and references data //encapsulates data

let fruits = {
    fruit1:"apple",
    "fruit 2":"banana",
    fruit3:"cherry",
    fruit4:"kivi",
}

// console.log(fruits.fruit3);
// console.log(fruits["fruit 2"]);

// JSON (JAVASCRIPT OBJECT NOTATION)

//Array

// let [fruit1, fruit2] = ["strawberry","mango","apple"] // 3 

// let fruits = ["strawberry","mango","apple"]

// let fruit1 = fruits[0]


// console.log(fruit1);
// console.log(fruit2);

// console.log(fruits[0],fruits[1],fruits[2]);

// const guestList = require("./namesData.js")

import guestList from "./namesData.js"

function greet(names){

    console.log(names.length);
    
     for(let name = 0; name < names.length; name ++){

       console.log(`Assalamualikum ${names[name]}\n`)
        
     }
}


greet(guestList)

