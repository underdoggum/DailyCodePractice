let arr3 = [11, 12, 13, 14, 15];
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let obj1 = {
  name: "Nathan",
  age: 33,
  height: "6ft"
}


// // Concat
// console.log(arr1.concat(arr2, arr3));

// // Entries
// for (let [index, element] of arr1.entries()) {
//   console.log(index, element);
// }
// for (let [i, e] of Object.entries(obj1)) {
//   console.log(i, e)
// }

// // Every
// console.log(arr2.every(num => num < 6))

// // Fill
// console.log(arr1.concat(arr2, arr3).fill(0, 5, 7))

// // Filter
// console.log(arr1.filter(num => num > 2))

// // Join
// console.log(arr1.join(""))

// // Keys
// for (let key of Object.entries(obj1)) {
//   console.log(key)
// }

// // Reduce
// const reducer = (prev, curr) => prev + curr;
// console.log(arr1.reduce(reducer))




















// const url = "https://pokeapi.co/api/v2/pokemon/";

// const getPokemonData = async pokemon => {
//   const response = await fetch(url + pokemon);
//   const data = await response.json();
//   return data;
// }

// console.log(getPokemonData("ditto"))