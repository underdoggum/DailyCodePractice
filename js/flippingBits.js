// Challenge Website: HackerRank
// Title: Flipping Bits
// URL: https://www.hackerrank.com/challenges/one-month-preparation-kit-flipping-bits/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one
// Problem: You will be given a list of 32 bit unsigned integers. Flip all the bits ( and ) and return the result as an unsigned integer.

const flippingBits = num => {
  // convert num to 32 bit base-2 unsigned integer
  let base2 = num.toString(2).split("");

  if (base2.length < 32) {
    for (let j = base2.length + 1; j <= 32; j++) {
      base2.unshift("0")
    }
  }
  
  // flip the bits
  for (let i = 0; i < base2.length; i++) {
    if (base2[i] === "1") {
      base2[i] = "0";
    } else if (base2[i] === "0") {
      base2[i] = "1";
    } else {
      console.log("Error!");
    }
  }

  // convert back to a base-2 number
  base2 = base2.join("");
  return parseInt(base2, 2);  
}


console.log(

  flippingBits(2147483647)

)