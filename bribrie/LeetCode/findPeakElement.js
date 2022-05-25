/**
 * @param {number[]} nums
 * @return {number}
 */

// O(logN)
var findPeakElement = function (nums) {
  let lt = 0;
  let rt = nums.length - 1;

  while (lt < rt) {
    let mid = parseInt((lt + rt) / 2);
    if (nums[mid] > nums[mid + 1]) {
      rt = mid;
    } else {
      lt = mid + 1;
    }
  }
  return lt;
};
