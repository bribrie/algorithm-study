// ? https://programmers.co.kr/learn/courses/30/lessons/12954

// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.  // x: 2 / n: 5 / answer: [2,4,6,8,10]

function solution(x, n) {
  let answer = [];
  let num = x;
  let count = 0;

  while (count < n) {
    answer.push(num);
    num += x;
    count++;
  }

  return answer;
}
