// ? https://programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
  let arr = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return Number(arr);
}
