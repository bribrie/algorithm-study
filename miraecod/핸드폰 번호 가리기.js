// ? https://programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
  let str = "";
  for (let i = 0; i < phone_number.length; i++) {
    if (i < phone_number.length - 4) str += "*";
    else str += phone_number[i];
  }
  return str;
}
