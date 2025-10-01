

// 2 types of programming

// 1) Functional Programming. (this code can be written in thousands of different ways And styles)

// 2) Object Oriented Programming. (This is a very simple and simlarly styled way of writing code)


// const ApplePie = "äpple pie"

// const apple_pie = "apple pie"




// const user1 = {
//     name:"Areeba",
//     age:30
// }

// const user2 = {
//     name:"Javeria",
//     age:35
// }

// const user3 = {
//     name:"Shahab",
//     age:22
// }

// const user4 = {
//     name:"Zahir",
//     age:98
// }

// const user5 = {
//     name:"Haris",
//     age:21
// }




// We have to make a user who will have certain attributes i.e: (name, age, profession, cnic)

class User {

    Name;
    Age;
    Profession;
    #Cnic;

    constructor(name, age, profession, cnic){

        this.Name = name
        this.Age = age
        this.Profession = profession
        this.#Cnic = cnic

    }

    getCnic(){

        let cnic = this.#Cnic

        return cnic
    }

}


// const people = [
//   { name: "Ali Khan", age: 25, profession: "Software Engineer", cnic: "35202-1234567-1" },
//   { name: "Sara Ahmed", age: 30, profession: "Doctor", cnic: "42101-7654321-2" },
//   { name: "Usman Malik", age: 28, profession: "Teacher", cnic: "61101-2468135-3" },
//   { name: "Ayesha Noor", age: 35, profession: "Architect", cnic: "37405-9876543-4" },
//   { name: "Hamza Raza", age: 22, profession: "Student", cnic: "33102-1357924-5" }
// ];


// for (let user of people){

//     console.log(new User(user.name,user.age,user.profession,user.cnic))
    
// }

const user1 = new User("Hamza Raza",22,"Student","33102-1357924-5")

console.log(user1.Name);
console.log(user1.Age);
console.log(user1.Cnic);

console.log(user1.getCnic());



// inheritance

// Polymorphism

// Encapsulation

// Abstraction


//Access Modifiers