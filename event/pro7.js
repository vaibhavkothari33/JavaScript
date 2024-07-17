//  generate a random color 

const randomColor = function () {
    const hex = "012346789ABCDEF";//16 values
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};
console.log(randomColor());

const start = document.getElementById("start");
const stop = document.getElementById("stop");
let intervalid; // scope ka problem
const startColor = function () {

    if(!intervalid){
        intervalid = setInterval(changeBgColor, 1000)
    } // double start button nai hona chale

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};
const stopColor = function () {
    clearInterval(intervalid)
    intervalid= null;
};
start.addEventListener("click", startColor);
stop.addEventListener("click", stopColor);