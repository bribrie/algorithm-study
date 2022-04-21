/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }

  const first = strs[0];

  for (let i = 0; i < first.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      const second = strs[j];
      if (second[i] !== first[i]) {
        return second.slice(0, i);
      }
    }
  }
};

console.log(longestCommonPrefix([""]));
