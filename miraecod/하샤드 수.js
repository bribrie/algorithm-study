// ? https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  let num = String(x);
  let sum = 0;

  for (let i = 0; i < num.length; i++) sum += Number(num[i]);
  return x % sum === 0 ? true : false;
}
