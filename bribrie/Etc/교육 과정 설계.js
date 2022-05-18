function solution(need, plan) {
  let answer = "YES";
  let queue = need.split("");

  for (let el of plan) {
    //필수일 때,
    if (queue.includes(el)) {
      if (el !== queue.shift()) {
        return "NO";
      }
    }
  }
  //필수인 거 다 했는지 확인
  if (queue.length > 0) {
    return "NO";
  }
  return answer;
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
