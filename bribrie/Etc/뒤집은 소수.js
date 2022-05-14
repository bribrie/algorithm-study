function isPrime(num) {
  //1은 소수가 아니기 때문에 false 처리
  if (num === 1) return false;
  //2부터 num의 제곱근까지 판별
  for (let i = 2; i < parseInt(Math.sqrt(num)); i++) {
    //약수가 발견되면 false
    if (num % i === 0) return false;
  }
  return true;
}

function solution(arr) {
  let answer = [];

  for (let el of arr) {
    let reversed = Number(el.toString().split("").reverse().join(""));
    if (isPrime(reversed)) answer.push(reversed);
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
