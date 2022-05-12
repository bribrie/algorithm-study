// ? https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const small = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
    } else {
      let CapitalOrSmall = capital.includes(s[i]) ? capital : small;
      let index = CapitalOrSmall.indexOf(s[i]) + n;
      if (index >= CapitalOrSmall.length) index -= CapitalOrSmall.length;
      answer += CapitalOrSmall[index];
    }
  }

  return answer;
}
