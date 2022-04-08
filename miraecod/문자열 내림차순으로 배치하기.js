// ? https://programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
  let answer = s.split("").sort().reverse().join("");
  return answer;
}
