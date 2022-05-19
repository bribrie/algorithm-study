// 문제 이해 === 풀이 방법
function solution(citations) {
  let answer = 0;
  citations.sort((a, b) => b - a);

  while (answer + 1 <= citations[answer]) {
    answer++;
  }
  return answer;
}
