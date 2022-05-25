// ? https://programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  s = s.split(" ");
  let arr = s.map((el) => Number(el));
  return Math.min(...arr) + " " + Math.max(...arr);
}
