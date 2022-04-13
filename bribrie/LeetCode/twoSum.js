/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const targetValue = target - nums[i];
    if (map.has(targetValue)) {
      return [map.get(targetValue), i];
    }
    map.set(nums[i], i);
  }
  return null;
};

// var twoSum = function (nums, target) {
//   let result = [];
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         result.push(i, j);
//         return result;
//       }
//     }
//   }
// };

//console.log(twoSum([2, 5, 5, 11], 10));
console.log(twoSum([3, 2, 4], 6));
