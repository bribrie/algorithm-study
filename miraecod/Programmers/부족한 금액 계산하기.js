// ? https://programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
  let sum = money;
  let charge = price;

  for (let i = 1; i <= count; i++) {
    sum -= charge;
    charge += price;
  }

  return sum < 0 ? -sum : 0;
}
