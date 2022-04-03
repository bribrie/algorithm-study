function solution(s) {
  let answer;
  let stack = [];

  for (let el of s) {
    if (el === ")") {
      while (stack.pop() !== "(");
    } else {
      //"(" 또는 알파벳 만났을 때
      stack.push(el);
    }
  }
  //console.log(stack);
  answer = stack.join("");
  return answer;
}

// lastIndexOf, splice 사용
function solution(s) {
  let answer;
  let stack = [];

  for (let el of s) {
    if (el !== ")") {
      stack.push(el);
    } else {
      let lastIdx = stack.lastIndexOf("(");
      stack.splice(lastIdx);
    }
  }
  //console.log(stack);
  answer = stack.join("");
  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
