// Challenge Website: CodeWars
// Title: Array.diff
// URL: https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
// Problem: Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

const arrayDiff = (arrA, arrB) => {
  for (let i = 0; i < arrA.length; i++) {
    console.log("checking", arrA[i])
    if (arrB.includes(arrA[i])) {
      arrA.splice(i, 1);
      // make sure to decrement the array index after splicing to check next element
      i -= 1;
    }
  }
  return arrA;
}

console.log(arrayDiff([1,2,2,2,3],[2]))