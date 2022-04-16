/**
 * @param {number} target
 * @param {array} arr
 * @return {number}
 *
 */

// 연속해서 더해서 target이 되는 경우의 수 구하기
// 투포인터 알고리즘

function solution(target, arr) {
  let answer = 0;
  let lt = 0;
  let sum = 0; //lt부터 rt까지의 값

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];

    if (sum === target) {
      answer++;
    }
    //크거나 같은 경우
    //같을 때도 while문에서 answer++ 후, sum에서 lt값 빼고 이동시킴
    while (sum >= target) {
      sum -= arr[lt++]; //빼고 lt이동
      if (sum === target) {
        answer++;
      }
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
