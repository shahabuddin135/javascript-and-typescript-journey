
// let simple_array; //kabab case or snake case
// 
// let SimpleArray // Title case
// 
// let simpleArray // camel case
// 
// let SIMPLE_ARRAY // kabab case
// 
// let simple // lower case
// 
// let SIMPLE // upper case

// upper case
// lower case
// title case
// kabab case
// camel case


// let my-name (not allowed)

//  let my_name (allowed)

// let 1myName (not allowed)

// let person1 (allowed)

// let _car (allowed)

// let $car (allowed)




// let numberArray = [9,2,7,6,5,4,3,8,1,0,10]

// console.log( numberArray.reverse());

// console.log(  numberArray.sort())

// let a  = 2
// let b = 3

// console.log(a - b); // 2 - 3 = -1 //hence proved that a is smaller value



// map => []
// filter []
// reduce => single value

//  func signature
// function sum () { function body OR block OR local Scope }

function sum (num1,num2){
   console.log(num1 + num2) // value printer
}

// sum(3,4)

// console.log(sum(3,7)); //undefined and prints 10 because it runs console.log

function sub (num1,num2){
   return num1 - num2 // value returned
}

// console.log(sub(3,5)); // -2 



//             0            1          2      3      4
// let names = ["areeba","shahabuddin","dadi","Aisha","zara"]

//pop() end value removal
//push() end value addition
//shift() removal from start
//unshift() add value to start

//What if we want to remove values from the middle?

//we use splice()


// let names = ["areeba","shahabuddin","dadi","Aisha","zara"]

// let extractedValues = names.splice(1,2) // for removing values

// names.splice(3,0,"Billi","mano")

// console.log(names);

// names.splice(2,1,"DADA")


// console.log(extractedValues);
// console.log(names);


// finding middle value 
// let names = ["areeba","shahabuddin","dadi","Aisha","zara","erri","waw","trei","cursor"]


// 9/2

// 4.5

// let middleValue = names.splice(names.length / 2 , 1)

// console.log(middleValue);



// let duplicate = names.slice(3,5)
//.length

// let lastValue = names[names.length - 1]
// console.log(names);

// let reversedArray = names.reverse()
// console.log(names);
// let firstValue = names[0]
// names.reverse()
// console.log(firstValue);
// console.log(names);
// console.log(lastValue);
// console.log(names.length);
