function solution(arr) {
  //자기 앞에 있는 모든 수 중에 자기보다 크거나 같은 숫자가 있으면 안됨.
  let answer = 1;
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      answer++;
    }
  }
  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
