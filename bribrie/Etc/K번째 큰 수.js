function solution(n, k, card) {
  let answer;
  let tmp = new Set();

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        //세 수를 더한다. (중복 제거 하면서!)
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  //console.log(tmp);
  //Set은 sort 사용할 수 없기때문에 array로 먼저 만들어주고 sort해준다.
  let sortedCard = Array.from(tmp).sort((a, b) => b - a);
  answer = sortedCard[k - 1];
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
