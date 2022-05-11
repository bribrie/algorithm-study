function solution(d, budget) {
  // 최대한 많이 -> 작은 것부터 지원
  let answer = 0;
  d.sort((a, b) => a - b);

  for (let el of d) {
    if (budget < el) break;
    budget -= el;
    answer++;
  }

  return answer;
}

//forEach
function solution(d, budget) {
  let answer = 0;
  let sum = 0;

  d.sort((a, b) => a - b).forEach((el) => {
    sum += el;
    if (sum <= budget) {
      answer++;
    }
  });
  return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9));
