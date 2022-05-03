// ? https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  let answer = participant.filter((name, index) => {
    return participant[index] !== completion[index];
  });

  return answer[0];
}
