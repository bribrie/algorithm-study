// 같은 점수가 입력될 경우 높은 등수로 동일 처리
function solution(arr) {
  let answer = [];
  let answerCount = 1;
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[i] < arr[j]) answerCount++;
      else if (arr[i] === arr[j]) answerCount = answerCount;
    }
    answer.push(answerCount);
    answerCount = 1;
  }
  return answer;
}

//* Arraay from 풀이
function solution(arr) {
  const n = arr.length;
  let answer = Array.from({ length: n }, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

// let arr = [87, 89, 92, 100, 76];
let arr = [87, 89, 92, 92, 76];
console.log(solution(arr));
