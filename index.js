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

//const car = "pink jeep"

// car = "black jeeb" // not allowed

// console.log(car);

// Number 
// String // primitive data types
// Boolean


// let nam; 

// console.log(nam);


// let cars = null

// console.log(cars);


//let smallNumber = 123;
// console.log(smallNumber);

//let bigNumber = 17868876876687687686866868678687678
// console.log(bigNumber);

//memory
// *-*-**-- => "areeba" => 000x0
// 10101010
// on off on off
// +-+--+-

//var one = "Areeba, saeeda yaseen sana" // 00X01


// let fruit1 = "apple"
// let fruit2 = "banana"
// let fruit3 = "orange"
// let fruit4 = "strawberry"

// OBJECT // groups and references data //encapsulates data

// let fruits = {
//     fruit1:"apple",
//     "fruit 2":"banana",
//     fruit3:"cherry",
//     fruit4:"kivi",
// }

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

// import guestList from "./namesData.js"

// function greet(names){

//     console.log(names.length);
    
//      for(let name = 0; name < names.length; name ++){

//        console.log(`Assalamualikum ${names[name]}\n`)
        
//      }
// }


// greet(guestList)


//Non primitive data types 

// Array
// Object
// function




// let person = "Jenna ortega";

//let [char1,char2,char3] = person// = "J" => array


// console.log(person.length);
// console.log(char1);
// console.log(char2);
// console.log(char3);



// let person = "JeNna OrtEGa Ruby GeniFer";

// let smallLetters = person.toLowerCase()

// let bigLetters = person.toUpperCase()

// console.log(smallLetters);
// console.log(bigLetters);

// let fruit = ["apple","cherry","mango"]

// console.log(fruit.pop());

// console.log(fruit.push("watermelon"));

// console.log(fruit);

// console.log(fruit.shift());
// console.log(fruit.unshift("BANANA"));

// console.log(fruit);


let person = "JeNna OrtEGa Ruby GeniFer";

//step 1
person = person.toLowerCase()

console.log(person);

//step 2
let seperatedWords = person.split(" ")

console.log(seperatedWords);

//step 3
let word1 = seperatedWords[0] 
let word2 = seperatedWords[1] 
let word3 = seperatedWords[2] 
let word4 = seperatedWords[3] 

console.log(word1);
console.log(word2);
console.log(word3);
console.log(word4);

//step 4
let capitalWord1 = word1[0].toUpperCase()
let capitalWord2 = word2[0].toUpperCase()
let capitalWord3 = word3[0].toUpperCase()
let capitalWord4 = word4[0].toUpperCase()

console.log(capitalWord1);
console.log(capitalWord2);
console.log(capitalWord3);
console.log(capitalWord4);

//step 5
let finalWord1 = capitalWord1 + word1.slice(1)
let finalWord2 = capitalWord2 + word2.slice(1)
let finalWord3 = capitalWord3 + word3.slice(1)
let finalWord4 = capitalWord4 + word4.slice(1)

console.log(finalWord1);
console.log(finalWord2);
console.log(finalWord3);
console.log(finalWord4);


//step 6 (Different ways to display the name)
console.log("========FINAL NAME=========");
// Ye wala concatinate nhi hua, just sath me ek line me print hua hai, ye ek name nhi, alag alag hai, due to comma
console.log(finalWord1,finalWord2,finalWord3,finalWord4,"\n");

//OR

//Ye concatination ka tareeqa hai, lengthy hai
console.log(finalWord1 + " " + finalWord2 + " " + finalWord3 + " " + finalWord4 + "\n");

// OR

//Ye eaSy tareeqa hai sab se, aur best way hai (programmers use his mostly)
console.log(`${finalWord1} ${finalWord2} ${finalWord3} ${finalWord4} `);


console.log("=================");
