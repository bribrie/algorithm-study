// ? https://programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  s = s.split(" ");

  let str = "";
  s.map((single) => {
    let word = "";
    for (let i = 0; i < single.length; i++) {
      if (i === 0) word += single[i].toUpperCase();
      else word += single[i].toLowerCase();
    }
    str += word + " ";
  });

  return str.slice(0, str.length - 1);
}
