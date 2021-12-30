// Challenge Website: CodeWars
// Title: Pair of Gloves
// URL: https://www.codewars.com/kata/58235a167a8cb37e1a0000db
// Problem: Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

function numberOfPairs(gloves) {
  // My hands are freezing

  // Sort gloves
  let glovesCopy = [...gloves];
  glovesCopy.sort((a, b) => a.localeCompare(b));
  
  let numberOfPairs = 0;
  for (let i = 0; i < glovesCopy.length - 1; i++) {
    if (glovesCopy[i] === glovesCopy[i+1]) {
      numberOfPairs++;
      i++;
    }
  }
  return numberOfPairs;
}


console.log(numberOfPairs(['red','red','red','red','red','red']));
