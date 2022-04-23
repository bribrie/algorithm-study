// ? https://programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
  let switched = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  let longestW = switched[0][0];
  let longestH = switched[0][1];

  for (let i = 1; i < switched.length; i++) {
    if (longestW < switched[i][0]) longestW = switched[i][0];
    if (longestH < switched[i][1]) longestH = switched[i][1];
  }

  return longestW * longestH;
}
