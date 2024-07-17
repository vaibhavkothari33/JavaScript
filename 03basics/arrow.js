const user = {
    username: "vaibhav",
    price: 999,

    welcome: function () {
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }

}
// user.welcome()
// user.username="sam";
// user.welcome()
// console.log(this); // {}

// this is a context

// function chai(){
//     console.log(this);

// }
// chai()

// *******************************
// arrow function 

// const addTwo = (num1,num2) => {
//     return num1+num2; //explite return 
// }
const addTwo = (num1, num2) => num1 + num2;  //implesite return 
// const addTwo = (num1,num2) => (num1+num2)

console.log("The sum of two numbers is: ", addTwo(36, 64));

// Regular functions have their own this context. And this is determined
// dynamically depending on how you call or execute the function. 

// Arrow functions, on the other hand, do not have their own this context

// Immediately invoke function expression (IIFE)
// data base

// ()()
// global scope ka pollution se baache ke leye
// we use IIFE
(function vaibhav() {
    console.log("DB connected");
})();
(()=>{
    console.log("DB connected ");
})()