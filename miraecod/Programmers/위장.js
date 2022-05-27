// ? https://programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
  let count = 1;
  let style = {};

  for (let cloth of clothes) {
    if (!(cloth[1] in style)) style[cloth[1]] = [cloth[0]];
    else style[cloth[1]].push(cloth[0]);
  }

  for (let cloth in style) {
    let num = style[cloth].length;
    count *= num + 1;
  }
  return count - 1;
}
