/*
1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냄
2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣음
3. 그렇지 않으면 J를 인쇄함
*/

function solution(priorities, location) {
  let count = 0;

  while (priorities.length > 0) {
    const max = Math.max(...priorities);
    const element = priorities.shift();

    if (element === max) {
      count++;
      if (location === 0) return count;
    } else {
      priorities.push(element);
    }

    if (location === 0) {
      location = priorities.length - 1;
    } else {
      location--;
    }
  }
}

//! 다른 풀이 (map, some 활용)
function solution(priorities, location) {
  let mappedArr = priorities.map((val, idx) => ({
    idx: idx,
    priority: val,
  }));
  let queue = []; //순서대로 들어옴

  while (mappedArr.length > 0) {
    const element = mappedArr.shift();
    const hasMaxNum = mappedArr.some((el) => el.priority > element.priority);

    if (hasMaxNum) {
      mappedArr.push(element);
    } else {
      queue.push(element);
    }
  }
  return queue.findIndex((el) => el.idx === location) + 1; //count위해 idx+1
}

let a = [2, 1, 3, 2];
let b = 2;
let c = [1, 1, 9, 1, 1, 1];
let d = 0;

console.log("1", solution(a, b));
console.log("2", solution(c, d));
