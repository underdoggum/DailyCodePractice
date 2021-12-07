// Challenge Website: HackerRank
// Title: The Lonely Integer
// URL: https://www.hackerrank.com/challenges/one-month-preparation-kit-lonely-integer/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one
// Problem: Given an array of integers, where all elements but one occur twice, find the unique element.

const lonelyInteger = arr => {
  let allNums = {};
  let singleNum = 0;

  // run through array twice
  for (let num of arr) {
    const numStr = num.toString();
    allNums[numStr] = allNums.hasOwnProperty(numStr) ? allNums[numStr] + 1 : 1;
  }
  for (const [key, value] of Object.entries(allNums)) {
    if (value === 1) {
      singleNum = key;
    }
  }
  return singleNum;
  // should give a result of O(N) time efficiency
}



console.log(

  lonelyInteger([1, 2, 3, 4, 3, 2, 1])

)