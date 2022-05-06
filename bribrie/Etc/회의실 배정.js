function solution(meeting) {
  //시작 === 종료 같은 경우 따로
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let answer = 0;
  let endTime = 0;

  for (let el of meeting) {
    if (el[0] >= endTime) {
      answer++;
      endTime = el[1];
    }
  }
  return answer;
}

//[시작, 종료]
let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];

let arr2 = [
  [3, 3],
  [1, 3],
  [2, 3],
];

console.log(solution(arr));
