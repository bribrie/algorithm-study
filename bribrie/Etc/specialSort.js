// 순서 변하지 않고 음수들만 앞으로!
// 버블정렬 -> 뒤의 수가 음수면 자리 바꾸기

function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));
