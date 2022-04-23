// ? https://programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
  let max = 1;
  let min = 1;

  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) max = i;
  }

  min = (n * m) / max;

  return [max, min];
}
