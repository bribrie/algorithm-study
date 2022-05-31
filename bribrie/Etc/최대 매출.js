// 슬라이딩 윈도우
// 윈도우(= 일정한 범위를 가지고 있는 것)을 유지하면서 이동하는 알고리즘
// 연속된 k일 동안의 최대 매출 리턴

function solution(k, arr) {
  let answer = 0;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  answer = sum;
  //3개의 합을 유지하면서 이동만 해서 비교함
  for (let i = k; i < arr.length; i++) {
    sum = sum + arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
