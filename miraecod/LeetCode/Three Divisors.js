// ? https://leetcode.com/problems/three-divisors/

/**
 * @param {number} n
 * @return {boolean}
 */

var isThree = function (n) {
  let count = 2;
  for (let i = 2; i < n; i++) if (n % i === 0) count++;
  return count === 3 ? true : false;
};
