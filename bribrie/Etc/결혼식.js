// 같은 시간에 있는 최대의 수 구하기
function solution(times) {
  let answer = 0;
  let timeLine = [];

  for (let el of times) {
    timeLine.push([el[0], "start"]);
    timeLine.push([el[1], "end"]);
  }

  timeLine.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  let cnt = 0;
  for (let el of timeLine) {
    if (el[1] === "start") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }
  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
