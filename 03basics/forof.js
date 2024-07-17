const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (const i of arr) {
    // console.log(i);
}

let map = new Map()

map.set("Hulk", "Marvel")
map.set("Batman", "DC")
map.set("Spiderman", "Marvel")
map.set("SuperMan", "DC")

for (const [key, value] of map) {
    // console.log(key," :- ",value);
}


// obj is not iterabl
const obj = {
    name: "vaibhav",
    age: 19,
    class: "XII B"
}

// for (const i of obj) {
//     console.log(i);
// }
// for of loop does'nt work for object
// so we use for in loop


for (const key in obj) {
        // console.log(`${key} is ${obj[key]}`);
}

const coding = ["js","python","Java","CPP","ruby"]

// coding.forEach(function(lang){
//     console.log(lang);
// })

coding.forEach((value)=>{
    console.log(value);
})