// Challenge Website: CodeWars
// Title: Sum of Pairs
// URL: https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript
// Problem: Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

const sumPairs = (ints, sum) => {
  let possiblePairs = [];

  for (let i = 0; i < ints.length; i++) {
    for (let j = i + 1; j < ints.length; j++) {
      if (ints[i] + ints[j] === sum) {
        // if (possiblePairs.length > 0 && possiblePairs)
        possiblePairs.push([ints[i], ints[j], j]);
        // compare j index to previous possible pairs. If it's lower, that's the target return pair
        
      }
    }   
  }
  if (possiblePairs.length === 0) return undefined;

  let result = possiblePairs[0];

  for (let k = 0; k < possiblePairs.length; k++) {
    if (possiblePairs[k][2] < result[2]) {
      result = possiblePairs[k];
    }
  }
  return result.slice(0, result.length - 1);
}


console.log(sumPairs([10, 5, 2, 3, 7, 5],         10));
