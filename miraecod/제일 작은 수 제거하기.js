// ? https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  let binarr = [];
  let min = Math.min(...arr);

  if (arr.length === 1) return [-1];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min) binarr.push(arr[i]);
  }

  return binarr;
}
