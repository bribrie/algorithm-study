// ? https://programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
  let binarr = [];
  let str = String(n);

  for (let i = str.length; i > 0; i--) binarr.push(Number(str[i - 1]));
  return binarr;
}
