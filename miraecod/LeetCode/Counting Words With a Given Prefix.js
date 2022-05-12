// ? https://leetcode.com/problems/counting-words-with-a-given-prefix/

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */

var prefixCount = function (words, pref) {
  let num = 0;
  for (let el of words) if (el.startsWith(pref)) num++;
  return num;
};
