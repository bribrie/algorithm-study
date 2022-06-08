// ? https://programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  let winner = [];

  const s1 = [1, 2, 3, 4, 5];
  const s2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === s1[i % s1.length]) score[0]++;
    if (answers[i] === s2[i % s2.length]) score[1]++;
    if (answers[i] === s3[i % s3.length]) score[2]++;
  }

  let max = Math.max(...score);

  for (let i = 0; i < score.length; i++) {
    if (max === score[i]) winner.push(i + 1);
  }

  return winner;
}

// 정답 배열에서 해당 인덱스의 정답이 수포자의 정답과 같은 경우만 필터링
// 새로운 배열을 반환 후 해당 배열의 길이를 구하면 = 정답의 갯수
// 최고점과 같은 경우 winner에 담아줌
