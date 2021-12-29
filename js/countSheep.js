// Challenge Website: CodeWars
// Title: Count all the sheep on farm in the heights of New Zealand
// URL: https://www.codewars.com/kata/58e0f0bf92d04ccf0a000010/train/javascript
// Problem: You need to return the amount of sheep lost (not returned to the farm) after final sheep counting on Saturday.

function lostSheep(friday,saturday,total){
  //your code here
  if (friday.length === 0) friday.push(0);
  if (saturday.length === 0) saturday.push(0);
  
  return total - friday.reduce((prev, curr) => prev + curr) - saturday.reduce((prev, curr) => prev + curr)
}

console.log(lostSheep([1, 2], [3, 4], 15));
