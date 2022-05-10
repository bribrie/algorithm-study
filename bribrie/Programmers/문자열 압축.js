/**
 * @param {string} s
 * @return {number}
 */

function solution(s) {
  let answer = s.length; //압축 하나도 안될 경우엔 s.length
  let maxLength = Math.floor(s.length / 2) + 1;

  for (let i = 1; i < maxLength; i++) {
    let cnt = 1; // 압축 횟수
    let saveStr = ""; // 압축 문자열

    for (let j = 0; j < s.length; j += i) {
      const firstStr = s.substring(j, j + i);
      const secondStr = s.substring(j + i, j + i * 2);

      if (firstStr === secondStr) {
        cnt++;
      } else {
        if (cnt === 1) {
          saveStr += firstStr;
        } else {
          saveStr += cnt + firstStr;
          cnt = 1;
        }
      }
    }
    answer = Math.min(answer, saveStr.length);
  }
  return answer;
}

console.log(solution("aabbaccc"));
