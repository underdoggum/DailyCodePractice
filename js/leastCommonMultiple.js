// Challenge Website: CodeWars
// Title: Sum of Pairs
// URL: https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript
// Problem: Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// NOTE: should consider refactoring using recursion

const lcm = (...args) => {
  // note: args is an array of all arguments passed in
  args.sort((a, b) => a - b);
  
  if (args.length === 0) return 1;
  if (args.length === 1) return args[0];

  // initialize result with first multiple
  let result = args[args.length-1] * args[args.length-2];

  for (let i = args.length - 3; i >= 0; i--) {
    if (result % args[i] !== 0) {
      result *= args[i];
    }
  }
  return result;
}


console.log(lcm(2, 3, 4, 12, 14))
