/**
 * @param {string} s
 * @return {number}
 */

//hashmap
var firstUniqChar = function (s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 0);
    }
  }

  for (let [key, value] of map) {
    if (value === 0) {
      let ans = s.indexOf(key);
      return ans;
    }
  }
  return -1;
};

// 다른 풀이: lastIndexOf
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar("loveleetcode"));
