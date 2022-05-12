// ? https://programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
  let times = 0;
  let sum = num;

  for (let i = 0; i < 500; i++) {
    if (sum !== 1) {
      if (sum % 2 === 0) sum = sum / 2;
      else if (sum % 2 === 1) sum = sum * 3 + 1;
    } else {
      return (times = i);
    }
  }
  return (times = -1);
}
