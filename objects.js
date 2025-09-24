

let hobbies = ["a","b"]

let person = {
    name:"Shahabuddin",
    age:22,
    gender:"male",
    isMarried:false,
    hobbies:["coding","scratch model crafts","gardening","astronomy"],
    adress:{
        country:"Pakistan",
        city:"karachi",
        ports:["karachi port","port qasim"],
        isCleanCity:false,
        skyscappers:5
    },

    showPersonData(){

        console.log(this.name);
        console.log(this.age);
        console.log(this.adress.country);
        console.log(this.adress.city);
        
    },

    showHoobies: function(){
       return this.hobbies  
    },

    sum(num1,num2){

        return num1 + num2
    }
}

person.showPersonData()

console.log(person.showHoobies());

let sum = person.sum(3,4)

console.log(sum);

console.log(person["name"]);
