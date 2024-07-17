// // fetch("https://something.com")
// const promise1 = new Promise(function (resolve,reject){
//     // do an async task
//     // DB calls 
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve()
//     },1000)
// });//object

// promise1.then(function(){
//     console.log("Promise consumed: ");
// })

// new Promise(function (resolve,reject){
//         setTimeout(function(){
//             console.log("Async task 2 completed twice");
//             resolve()
//         },1000)
// }).then(
//     function(){
//         console.log("Aysnc task 2  completed now");
//     }
// )


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log();
        console.log("USER DETAILS:");
        resolve({ username: "Vaibhav", age: 19 })
        console.log();
    }, 1000)
})

promiseThree.then(function(username){
    console.log(username);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "Vaibhav Kothari", age: 20, password: 123 })
        }
        else {
            reject("ERROR Something went wrong")
        }
    }, 1000)
})

promiseFour
.then(function(user){
    console.log(user);
    return user.username ,user.age;

})
.then(function(username,age){
    console.log(username);
    console.log(age);

})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("Your task is either resolve or rejeted ");
})

// async await
const promise5 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ JS: "JAVASCRIPT", PY: "PYTHON", CPP: "C++" });

        }
        else {
            reject("ERROR Something went wrong")
        }
    }, 1000)
});

async function consumePromiseFive(){
    try{
        const responce = await promise5;
        console.log(responce);
    }
    catch(error){
        console.log(error);
    }

}
consumePromiseFive()