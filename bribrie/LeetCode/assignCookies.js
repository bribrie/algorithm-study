/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let cnt = 0;
  let pos = 0;

  for (let i = 0; i < s.length; i++) {
    if (g[pos] <= s[i]) {
      cnt++;
      pos++;
    }
  }
  return cnt;
};

//다른 풀이
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let cnt = 0;
  let gpos = 0;
  let spos = 0;

  while (spos < s.length && gpos < g.length) {
    if (g[gpos] <= s[spos]) {
      cnt++;
      gpos++;
      spos++;
    } else {
      spos++;
    }
  }
  return cnt;
};

let g = [10, 9, 8, 7];
let s = [5, 6, 7, 8];

let g2 = [1, 2, 3];
let s2 = [1, 1];

console.log(findContentChildren(g, s));
