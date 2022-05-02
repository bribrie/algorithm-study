function solution(a, b) {
  let answer = 0;
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  if (min === max) {
    return min;
  }

  for (let i = min; i <= max; i++) {
    answer += i;
  }
  return answer;
}

//다른 풀이
function solution(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}
