function solution(numbers) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }
  return answer;
}

//* 다른 풀이
function solution(numbers) {
  return (answer = 45 - numbers.reduce((acc, cur) => acc + cur));
}

const arr = [5, 8, 4, 0, 6, 7, 9];
console.log(solution(arr));
