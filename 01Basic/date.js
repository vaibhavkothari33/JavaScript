let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let datemy = new Date(2023, 2, 15); //month starts from 0 
let newData = new Date("2023-01-04");
let newData1 = new Date("01-04-2024");
// console.log(datemy.toDateString());
// console.log(newData.toLocaleString());
// console.log(newData.toDateString());
// console.log(newData1.toLocaleString());
// console.log(newData1.toDateString());
// console.log(datemy.toLocaleString());

// console.log(newData.getTime());
// console.log(newData.getFullYear());
// console.log(newData.getMonth()+1);
// console.log(newData.getDay());
// console.log(newData.getTime());
// 1672790400000
// 2023
// 0
// 3
// 1672790400000

newData.toLocaleString('default', { weekday: "long", weekday: "long" }
)