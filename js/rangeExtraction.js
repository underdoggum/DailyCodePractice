// Challenge Website: CodeWars
// Title: Range Extraction
// URL: https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript
// Problem: Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

const solution = list => {
  // check if there are at least three consecutive integers in the list
  let str = "";
  let consecutiveCount = 0;
  for (let i = 0; i < list.length; i++) {
    // first number, not consecutive
    if (i === 0) {
      str += list[i];
    } else {
      if (list[i] - 1 === list[i-1]) {
        consecutiveCount++;
        if (consecutiveCount >= 3) {
          
        }
      } else {
        str += ", " + list[i];
      }
    }
  }
  return str;
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))