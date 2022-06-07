// ? https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/

/**
 * @param {string} s
 * @return {boolean}
 */

var areNumbersAscending = function (s) {
  let newarr = s
    .split(" ")
    .filter((el) => !isNaN(el))
    .map((el) => Number(el));

  for (let i = 0; i < newarr.length; i++) {
    if (newarr[i] >= newarr[i + 1]) return false;
  }
  return true;
};
