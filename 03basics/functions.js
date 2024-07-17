// console.log("Hello world");
// vaibhav();
// function vaibhav(){
//   console.log("Vaibhav");
// }

// vaibhav();
// console.log("Hello world");

// // when no value is given in the  function then it is undefined

function isLoggedin(username="sam"){
    if(!username){
        console.log("Please enter a user name");
        return
    }
    else{
        return `${username} just logged in `
    }

}
// console.log(isLoggedin("Vaibhav"));
// console.log(isLoggedin(""));
// console.log(isLoggedin());

function vaibhav(...num1){
    return num1;
}
console.log(vaibhav(200,500,800,4000,6000));
// then it will return an array

