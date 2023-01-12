/**
 * @param {number[]} nums
 * @return {number}
 * Given an integer array nums,
 * find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * A subarray is a contiguous part of an array.
 */

var maxSubArray = function (nums) {
  let sum = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    max = Math.max(sum, max);
  }
  return max;
};

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
