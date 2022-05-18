function solution(s) {
  let answer = 0;
  let stack = [];

  for (let el of s) {
    //숫자면 stack에 push
    if (!isNaN(el)) {
      stack.push(Number(el));
    } else {
      let rt = stack.pop(); //먼저 꺼내는 게 오른쪽
      let lt = stack.pop();
      if (el === "+") stack.push(lt + rt);
      if (el === "-") stack.push(lt - rt);
      if (el === "*") stack.push(lt * rt);
      if (el === "/") stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

let str = "352+*9-";
console.log(solution(str));
