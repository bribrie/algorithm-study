function solution(nums) {
  let answer = [];
  let maxLength = nums.length / 2;

  for (let value of nums) {
    if (answer.length < maxLength) {
      if (!answer.includes(value)) {
        answer.push(value);
      }
    }
  }
  return answer.length;
}

//Set 풀이
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}
