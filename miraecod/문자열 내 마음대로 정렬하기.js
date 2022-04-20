// ? https://programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings, n) {
  let binarr = [];

  for (let i = 0; i < strings.length; i++) {
    let binstr = strings[i][n] + strings[i];
    binarr.push(binstr);
  }

  binarr.sort();

  for (let j = 0; j < binarr.length; j++) {
    binarr[j] = binarr[j].substr(1);
  }

  return binarr;
}
