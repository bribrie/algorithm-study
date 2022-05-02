function solution(s) {
  s = s.toLowerCase();
  let count = 0;

  for (let el of s) {
    if (el === "p") count++;
    if (el === "y") count--;
  }
  return count === 0;
}

// 다른 풀이
function numPY(s) {
  return (
    s.toLowerCase().split("p").length === s.toLowerCase().split("y").length
  );
}
