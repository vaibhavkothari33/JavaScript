//  object literals

const mysy = Symbol("key1");

const JsUser={
    name:"vaibhav",
    "hello":"hi",
    // mysy:"key112",
    [mysy]:"key112", // this [] represents the use of symbols
    age:12,
    location:"jaipur",
    email:"vaibhavkothari@gmail.com",
    idLoggedin:false
}

// console.log(JsUser.name);
// console.log(JsUser["age"]);
// console.log(JsUser["hello"]);
// console.log(JsUser["email"]);
console.log(JsUser[mysy]);
console.log(typeof JsUser[mysy]);

JsUser.email = "vaibhav@google.com";
// Object.freeze(JsUser)
JsUser.email= "vaibhav@chatgpt.com"
console.log(JsUser);

JsUser.greeating = function(){
    console.log("Hello js user");
}

JsUser.greeating2 = function(){
    console.log(`Hello js user, ${this.name}`); //object of this oops
}
console.log(JsUser.greeating());
console.log(JsUser.greeating2());