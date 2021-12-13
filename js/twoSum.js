// Challenge Website: LeetCode
// Title: Two Sum
// URL: https://leetcode.com/problems/two-sum/
// Problem: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.


const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      } else if (nums[i] + nums[j] === target) {
        return [i, j];
      } else {
        continue;
      }
    }
  }
  return "Not found";
}


console.log(twoSum([3, 2, 4], 6))