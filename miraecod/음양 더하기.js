// ? https://programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  let sum = 0;

  for (let j = 0; j < signs.length; j++) {
    if (signs[j] === true) sum += absolutes[j];
    else sum -= absolutes[j];
  }

  return sum;
}
