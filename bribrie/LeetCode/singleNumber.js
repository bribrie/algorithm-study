/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
  let result = [];

  for (let i of nums) {
    if (!result.includes(i)) {
      result.push(i);
    } else {
      result.splice(result.indexOf(i), 1);
    }
  }
  return result[0];
};
