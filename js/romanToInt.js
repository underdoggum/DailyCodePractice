// Challenge Website: LeetCode
// Title: Roman to Integer
// URL: https://leetcode.com/problems/roman-to-integer/
// Problem: Given a roman numeral, convert it to an integer.

const romanToInt = str => {
  const conversion = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }
  let result = 0

  for (let i = str.length - 1; i >= 0; i--) {
    let num = conversion[str[i]];
    if (4 * num < result) {
      result -= num;
    } else {
      result += num;
    }
  }
  return result;
}

console.log(romanToInt("IX"));
