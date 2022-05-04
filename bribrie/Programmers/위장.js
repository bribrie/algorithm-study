// * [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];
// [의상의 이름, 의상의 종류]

/**
 * @param {array} clotehs
 * @return {number}
 */

function solution(clothes) {
  let answer = 1;
  let map = new Map();

  for (let el of clothes) {
    //종류를 key로 이름을 수로 value에 넣기
    if (!map.has(el[1])) {
      map.set(el[1], 1);
    } else {
      map.set(el[1], map.get(el[1]) + 1);
    }
  }

  for (let [key, value] of map) {
    answer *= value + 1;
  }
  return answer - 1;
}

let arr = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];
console.log(solution(arr));
