// ? https://programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  let index = Math.floor(len / 2);
  return s.length % 2 === 0 ? s[index - 1] + s[index] : s[index];
}
