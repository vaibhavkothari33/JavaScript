// const tinderUSer=new Object() // this is a singleton object

const tinderUSer = {} //this is not a singleton object

tinderUSer.id = "123sam"
tinderUSer.name = "Vaibhav"
tinderUSer.isLoggedIn = false
// console.log(tinderUSer);

const regularUSer = {
    email: "risshi@tinder.com ",
    fullName: {
        userfullname: {
            firstname: "vaibhav",
            lastname: "kothari"
        }
    }
}

// console.log(regularUSer);
// console.log(regularUSer.fullName);
// console.log(regularUSer.fullName.userfullname);
// console.log(regularUSer.fullName.userfullname.firstname);
// console.log(regularUSer.fullName.userfullname.lastname);

const obj1 = { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e" }
const obj2 = { "a": 1, "b": 2, "c": 3, "d": 4, "e": 5 }

// const obj3 = Object.assign(obj1, obj2) //not so good approch
// const obj4 = Object.assign({}, obj1, obj2,obj3) //good practice 
// console.log(obj3);
// console.log(obj4); 

console.log(tinderUSer);
console.log(Object.keys(tinderUSer));
console.log(Object.values(tinderUSer));
console.log(Object.entries(tinderUSer));
console.log(tinderUSer.hasOwnProperty("isLoggedIn"));
console.log(tinderUSer.hasOwnProperty("isLoggedOut"));
