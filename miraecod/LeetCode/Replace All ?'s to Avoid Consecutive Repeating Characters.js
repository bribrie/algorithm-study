// ? https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/

/**
 * @param {string} s
 * @return {string}
 */

var modifyString = function (s) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "?") {
      answer += s[i];
      alphabet = alphabet.replace(s[i], "");
    } else {
      let idx = s.indexOf("?");
      let prev = s[idx - 1];
      let next = s[idx + 1];
      alphabet = alphabet.replace(prev, "");
      alphabet = alphabet.replace(next, "");

      for (let j = 0; j < alphabet.length; j++) {
        answer += s.replace(s[i], alphabet[j]);
        break;
      }
    }
  }

  return answer;
};
