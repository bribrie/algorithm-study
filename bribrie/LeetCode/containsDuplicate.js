/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  const set = new Set(nums);
  return set.size !== nums.length ? true : false;
};

//console.log(containsDuplicate([1, 2, 3, 1]));
