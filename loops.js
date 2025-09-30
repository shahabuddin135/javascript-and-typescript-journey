
for( let count = 1; count <= 11; count ++ ){

    console.log(count);
    
}


const fruits = ["apple","banana","watermelon"]

//for of loops
for (let fruit of fruits){

    console.log(`I love ${fruit}`);
    
}

//for in loop
for (let fruit in fruits){
    console.log(fruit);
    
}


//Comparision operators
// < less than // 10 < 5 false // 5< 10 true
// > more than // 1> 2 false // 3 > 1 true
//  <= less than equal to 
//  >= more than equal to 
//  == double equal // 1 == "1" True
//  === triple equal // 1 === "1" False


// console.log(10 >= 5); // 

//arthmetic operators 
// 
//+
//  -
//  /
//  * 
// ** exponential
// % modulus


//logical operators
// &&  ,  ||, ! 



// AND // 0 | 1 = 0
// OR 1 | 0 = 1


// "areeba" ----> function(name) --> Parameter //The variable which recieve the data form funciton argument is called Parameter.

// "areeba" --> greet("areeba") --> Argument // The Data passed into the function call is called Argument.

// 1 ) Parameters
// 2) Arguments


// let randomFruit = "banana"

// let fruit = randomFruit

function subtract(num1,num2){

    return num1 - num2
}

// console.log(subtract(1,2));


// function GreetUser(userName){

//     return `Hello ${userName ?? "Guest"}` //nullish coalesing
// }


function GreetUser(userName = "Guest"){ //default parameter

    return `Hello ${userName}`
}

let result = GreetUser()

console.log(result);



// for 
// for in
// for of 

//While loop

//Do while loop


// 1 se 10

let number = 0

// while(number < 10){

//     number ++

//     console.log(number);
    
// }

// console.log(10 < 10);

do{

    console.log(`Hello ${number++}`);
    
}while(false)




while (true){

    console.log("Happy Birth Day Areeba!", number++);
    
}
