// Challenge Website: HackerRank
// Title: Diagonal Difference
// URL: https://www.hackerrank.com/challenges/one-month-preparation-kit-diagonal-difference/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one
// Problem: Given a square matrix, calculate the absolute difference between the sums of its diagonals.

const diagonalDifference = arr => {
  let ltrSum = 0;
  let rtlSum = 0;

  // find left-to-right and right-to-left diagonal sums
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (i === j) {
        ltrSum += arr[i][j];
      }
      if (j === arr.length - 1 - i) {
        rtlSum += arr[i][j];
      }
    }
  }

  // return absolute value of the difference between the diagonals
  return Math.abs(ltrSum - rtlSum);
}






console.log(

  diagonalDifference([[1,2,3,4],[1,4,5,6],[21,7,8,9]])

)
