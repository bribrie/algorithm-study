// ? https://programmers.co.kr/learn/courses/30/lessons/12921

function solution(n) {
  let binarr = [];
  let num = 0;

  for (let i = 1; i <= n; i++) binarr.push(i);

  for (let j = 1; j * j < n; j++) {
    if (binarr[j]) {
      num = binarr[j];
      for (let k = num * num; k <= n; k += num) {
        binarr[k - 1] = 0;
      }
    }
  }

  binarr = binarr.filter((el) => el);
  binarr.shift();
  return binarr.length;
}
