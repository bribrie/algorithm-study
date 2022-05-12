// ? https://programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const date = new Date(`2016-${a}-${b}`);
  const index = date.getDay();

  return week[index];
}
