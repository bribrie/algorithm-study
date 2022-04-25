// ? https://programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  let arr = s.split(" ");
  let binarr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 === 0) binarr.push(arr[i][j].toUpperCase());
      else binarr.push(arr[i][j].toLowerCase());
    }
    binarr.push(" ");
  }

  return binarr.join("").slice(0, binarr.length - 1);
}
