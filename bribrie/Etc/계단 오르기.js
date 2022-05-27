//한 계단 or 두 계단씩 올라갈 수 있음
function solution(n) {
  let answer = 0;
  let dy = Array.from({ length: n + 1 }, () => 0);

  dy[1] = 1; //한 계단 가는 방법 - 1
  dy[2] = 2; // 두 계단 가는 방법 - 2

  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }
  answer = dy[n];
  return answer;
}

console.log(solution(7));
