// ? https://programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
  n = n.toString(3).split("").reverse().join("");
  let parsing = parseInt(n, 3);
  return parsing;
}
