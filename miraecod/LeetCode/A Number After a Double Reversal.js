// ? https://leetcode.com/problems/a-number-after-a-double-reversal/

/**
 * @param {number} num
 * @return {boolean}
 */

var isSameAfterReversals = function (num) {
  let reversedNum1 = Number(num.toString().split("").reverse().join(""));
  let reversedNum2 = Number(
    reversedNum1.toString().split("").reverse().join("")
  );
  return reversedNum2 === num ? true : false;
};
