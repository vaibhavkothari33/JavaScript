let vari ;
const time = document.querySelector(".time")
const stop = document.querySelector("#stop")
const vaibhav = document.querySelector("#start");


vaibhav.addEventListener("click", function () {
   vari = setInterval(function(){
    console.log("Hello",Date.now());
   },1000)

}, false);

stop.addEventListener("click", function () {
      clearInterval(vari)
})

// const saydate = ()=>{
//     // console.log(Date.now());
//     const start1 = setInterval(function(){
//     saydate()
// },1000)
// }

// // saydate()



