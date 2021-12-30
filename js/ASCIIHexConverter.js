// Challenge Website: CodeWars
// Title: ASCII hex converter
// URL: https://www.codewars.com/kata/52fea6fd158f0576b8000089/train/javascript
// Problem: Write a module Converter that can take ASCII text and convert it to hexadecimal.

const Converter = {
  toAscii: function (hex) {
    // initialize variables
    let arr = [];
    let arrStr = "";
    // split each hex string into two character pairs
    for (let i = 0; i < hex.length; i++) {
      if (i % 2 === 1) {
        arr.push(hex.substring(i-1, i+1))
      }
    }
    // convert hex pairs to base10 (?)
    // let base10 = parseInt(hex, 16);
    for (let j = 0; j < arr.length; j++) {
      let asciiCode = parseInt(arr[j], 16);
      arrStr += (String.fromCharCode(asciiCode));

    }
    return arrStr;
    
    // to convert to ascii
    // return String.fromCharCode(asciiCode);

  },
  toHex: function (ascii) {
    // initialize variables
    let hexStr = "";
    // separate ascii string into single characters

    // convert characters to their char codes
    for (let i = 0; i < ascii.length; i++) {
      let code = ascii.charCodeAt(i).toString(16);
      hexStr += code;
    }

    // convert to hex
    return hexStr;
    // return concatenated hex string

  }
}





console.log(
  Converter.toHex("Look mom, no hands")
);

// console.log(
//   Converter.toAscii("4c6f6f6b206d6f6d2c206e6f2068616e6473")
// );
