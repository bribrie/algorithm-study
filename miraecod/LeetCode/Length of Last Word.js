// ? https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {
  s = s.split(" ");

  const binarr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "") binarr.push(s[i]);
  }

  return binarr[binarr.length - 1].length;
};
