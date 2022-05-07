/**
 * @param {number[]} cost
 * @return {number}
 */

var minimumCost = function (cost) {
  cost.sort((a, b) => b - a);
  let sum = 0;
  // 3rd for free
  for (let i = 0; i < cost.length; i++) {
    if ((i + 1) % 3 !== 0) {
      sum += cost[i];
    }
  }
  return sum;
};

//reduce 사용
var minimumCost = (cost) =>
  cost
    .sort((a, b) => b - a)
    .reduce((acc, cur, idx) => ((idx + 1) % 3 !== 0 ? acc + cur : acc + 0), 0);

console.log(minimumCost([6, 5, 7, 9, 2, 2]));
