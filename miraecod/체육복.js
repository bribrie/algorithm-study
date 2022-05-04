// ? https://programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  let firstNewArr = reserve.filter((el) => !lost.includes(el));
  let secondNewArr = lost.filter((el) => !reserve.includes(el));

  for (let i = 0; i < firstNewArr.length; i++) {
    for (let j = 0; j < secondNewArr.length; j++) {
      if (
        firstNewArr[i] - 1 === secondNewArr[j] ||
        firstNewArr[i] + 1 === secondNewArr[j]
      ) {
        secondNewArr[j] = -1;
        break;
      }
    }
  }

  return n - secondNewArr.filter((el) => el !== -1).length;
}
