// Challenge Website: CodeWars
// Title: Build Tower
// URL: https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
// Problem: Build Tower by the following given argument: number of floors (integer and always greater than 0).

// O(n^2) solution
// const partsSums = ls => {
//   let result = [];
//   let copy = [...ls];

//   // split into parts
//   // for each part, sum up values in the array
//   ls.forEach((part, i) => {
//     let sum = copy.reduce((a, b) => a + b);
//     console.log("sum", sum)
//     result.push(sum)
//     copy.shift(0);
//   })
//   // push each value to the result
//   result.push(0);
//   return result;
// }


// O(n) solution
// Note: no need to sum up many times
const partsSums = ls => {
  let result = [];

  // compute initial sum
  let sum = ls.reduce((a, b) => a + b);
  result.push(sum);

  for (let i = 1; i < ls.length; i++) {
    sum -= ls[i-1]
    result.push(sum);
  }
  return result;
}


console.log(partsSums([1, 2, 3, 4, 5, 6]))