// Challenge Website: CodeWars
// Title: Create Phone Number
// URL: https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
// Problem: Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

const createPhoneNumber = numbers => {
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    console.log(format)
    format = format.replace('x', numbers[i]);
  }
  
  return format;

}


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))