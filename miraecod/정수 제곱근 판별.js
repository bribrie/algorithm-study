// ? https://programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
  let init = Math.sqrt(n);
  return init % 1 === 0 ? Math.pow(init + 1, 2) : -1;
}
