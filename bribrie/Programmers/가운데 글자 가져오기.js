function solution(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
}

//다른 풀이
function solution(s) {
  const len = s.length;
  return s.substr(Math.ceil(len / 2) - 1, len % 2 === 0 ? 2 : 1);
}

console.log(solution("qwer"));
