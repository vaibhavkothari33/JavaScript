// const color = document.querySelectorAll(".button")
// const body = document.querySelector("body")
// const gray_color = document.querySelector("#gray")
// const blue_color = document.querySelector("#blue")
// const red_color = document.querySelector("#red")
// const black_color = document.querySelector("#black")
// console.log(gray_color);
// function gray(){
//     body.style.backgroundColor="grey"
// }
// function blue(){
//     body.style.backgroundColor="blue"
// }
// function red(){
//     body.style.backgroundColor="red"
// }
// function black(){
//     body.style.backgroundColor="black"
// }

const color = document.querySelectorAll(".button")
const body = document.querySelector("body")
color.forEach(function(button){
    button.addEventListener("click",function(e){
        console.log(e.target.id);
        if(e.target.id ==="gray"){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id ==="blue"){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id ==="black"){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id ==="red"){
            body.style.backgroundColor=e.target.id
        }
    })
})