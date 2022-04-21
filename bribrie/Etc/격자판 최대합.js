//행의 합, 열의 합, 두 대각선의 합 중 가장 큰 합을 출력

function solution(arr) {
  const n = arr.length;
  let answer = Number.MIN_SAFE_INTEGER;
  let sumOfRows = 0;
  let sumOfColumn = 0;

  //* 행의 합과 열의 합 비교
  for (let i = 0; i < n; i++) {
    sumOfRows = sumOfColumn = 0; //초기화
    for (let j = 0; j < n; j++) {
      sumOfRows += arr[i][j];
      sumOfColumn += arr[j][i];
    }
    answer = Math.max(answer, sumOfRows, sumOfColumn);
  }

  //* 두 대각선의 합 비교
  sumOfRows = sumOfColumn = 0; //초기화
  for (let i = 0; i < n; i++) {
    sumOfRows += arr[i][i];
    sumOfColumn += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sumOfRows, sumOfColumn);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.log(solution(arr));
