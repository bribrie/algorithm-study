// ? https://programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  let newarr = arr.filter((el) => el % divisor === 0).sort((a, b) => a - b);
  return newarr.length ? newarr : [-1];
}
