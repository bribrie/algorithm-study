// ? https://programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  d = d.sort((a, b) => a - b);

  let num = 0;
  let sum = 0;

  for (let i = 0; i < d.length; i++) {
    sum += d[i];

    if (sum <= budget) num++;
    else break;
  }

  return num;
}

// 적은 금액부터 지원할 경우 최대한 많은 부서의 물품을 구매할 수 있음
// 예산보다 많아지기 전까지만 더하고 이외에는 break
