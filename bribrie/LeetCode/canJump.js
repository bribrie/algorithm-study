/**
 * @param {number[]} nums
 * @return {boolean}
 * You are given an integer array nums. You are initially positioned at the array's first index,
 * and each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise.
 */

// 1
var canJump = function (nums) {
  let maxJump = 0;

  for (let i = 0; i < nums.length; i++) {
    if (maxJump < i) {
      return false;
    } else if (i + nums[i] >= nums.length - 1) {
      return true;
    }
    maxJump = Math.max(nums[i] + i, maxJump);
  }
};

// 2
var canJump = function (nums) {
  let maxJump = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (maxJump < i) {
      return false;
    }
    maxJump = Math.max(nums[i] + i, maxJump);
  }
  return true;
};

console.log(canJump([2, 3, 1, 1, 4]));
