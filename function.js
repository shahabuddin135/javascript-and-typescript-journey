
//let apple = "ahah"; // we can access global variables from local scope but we cannot acces local variables form global scope

// function sum(num1 , num2){
//     apple = "ss"
//     console.log(apple);
    
//     return num1 + num2
// }

// console.log(apple);


// let result = sum(3,5)

// console.log(result);


// let apple = "apple"



// if (true){
 
//     var apple = "sds"
// }

// console.log(apple);



function multiply(num1 , num2){ //function definition // can be accessed or ran before being initailized (can be hoisted)
    
    return num1 * num2
}

// console.log(multiply(3,4));s



let divide = (num1 , num2) => { //function expression // cannot be hoisted
    return num1 / num2
} 

// console.log(divide());



() => {} // anonymous function (a function with no name)

//IIFE // Immediatley Invocted Function Expression



// console.log((
//     (num1,num2) =>  num1 + num2
    
// )(4,5));


//This is also funciton, arrow function
// const double = num => num * 2


// console.log(double(12));


(
    function (){
        console.log(1);
        
    }
)();

(
   ()=>{
        console.log(1);
        
    }
)()


// (console.log(()=>{console.log(1);}))();
