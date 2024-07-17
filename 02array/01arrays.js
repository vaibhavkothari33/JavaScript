const arr=[0,1,2,3,4,5,6];

arr.push(7);
arr.push("vaibhav")
arr.pop();
// push is use to add value in the last
// unshift is used to add value in the starting of the arr 
// but generally it is not used ans it's a bad practice
arr.unshift(85);
arr.shift()
// shift removes the first element


// console.log(arr);
// const newArr=arr.join();
// console.log(newArr);


// .join converts the value of the arr to string  comma sepe
// slice and splice

// slice - slice extract the part of array and then print it (1,3) [1 ,2]
// splice - splice extract the part of the array but it removes it from the array (1,3) 
// and original array = [0,1,2,3,4,5]

// answer after slice [1,2] and original array [0,1,2,3,4,5]
//answer after splice [1,2,3] and original array [0,4,5]


let marvel_heros = ["Captain America","Iron man","Hulk","Black widow"];
let dc_heros = ["Batman","Superman","Wonder Women"];
// console.log(marvel_heros.concat(dc_heros));
const all_heros = [...dc_heros,...marvel_heros]
marvel_heros.push(dc_heros);
// console.log(all_heros)  // a better way to concat data of multiple array


const mult_Array= [1,2,3,[4,5,6],[45,78,[85,25]]]

const real_mult_array = mult_Array.flat(Infinity);
// console.log(real_mult_array);

console.log(Array.isArray("Vaibhav"));
console.log(Array.from("Vaibhav"));

console.log(Array.from({name: "Vaibhav",age:45})) // instersing




