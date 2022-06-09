/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 순서 상관 없음
 */
var intersect = function (nums1, nums2) {
  let map = new Map();
  let answer = [];

  for (let el of nums1) {
    if (map.has(el)) {
      map.set(el, map.get(el) + 1);
    } else {
      map.set(el, 1);
    }
  }

  for (let el of nums2) {
    //중복 되지 않도록 map의 value 하나씩 마이너스 함
    if (map.has(el) && map.get(el) > 0) {
      answer.push(el);
      map.set(el, map.get(el) - 1);
    }
  }

  return answer;
};

let nums1 = [4, 9, 5];
let nums2 = [9, 4, 9, 8, 4];
console.log(intersect(nums1, nums2));
