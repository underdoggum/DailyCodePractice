// Challenge Website: LeetCode
// Title: Maximum Subarray
// URL: https://leetcode.com/problems/maximum-subarray/
// Problem: Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

const maxSubArray = nums => {
  let max = 0;

  // try 1st + 2nd, 1st + 2nd + 3rd, etc.
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[i] + nums[i+1] > max) {
  
      }
    }
  }
}

console.log(maxSubArray([]))