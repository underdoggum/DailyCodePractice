// Challenge Website: CodeWars
// Title: Pick Peaks
// URL: https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/train/javascript
// Problem: In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

function pickPeaks(arr){
  let plateau = {
    pos: 0,
    peaks: 0
  }
  let result = {
    pos: [],
    peaks: []
  }
  
  if (arr.length === 0) {
    return result;
  }
  
  for (let i = 0; i < arr.length - 2; i++) {
    // peak case: when next element keeps increasing until it decreases
    if (arr[i] < arr[i+1]) {
      if (arr[i+1] > arr[i+2]) {
        if (i === arr.length - 3) {
          result.pos.push(i);
          result.pos.push(arr[i]);
        } else {
          result.pos.push(i+1);
          result.peaks.push(arr[i+1]);
        }
      }
    }
  }  

  return result;
}

console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]))