/**
 * @param {number[]} nums
 * @return {number}
 */

// 투포인터
var removeDuplicates = function (nums) {
  let pos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[pos] !== nums[i]) {
      nums[++pos] = nums[i];
    }
  }
  return pos + 1;
};
