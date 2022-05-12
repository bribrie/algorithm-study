// ? https://programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
  let answer = 0;
  let start = 1;

  while (start <= n) {
    if (n % start === 0) {
      answer += start;
    }
    start += 1;
  }

  return answer;
}
