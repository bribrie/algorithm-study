function solution(participant, completion) {
  let hash = new Map();

  for (let i = 0; i < participant.length; i++) {
    let started = participant[i];
    let finished = completion[i];

    hash.set(started, (hash.get(started) || 0) + 1);
    hash.set(finished, (hash.get(finished) || 0) - 1);
  }
  //   console.log(hash);

  for (let [key, value] of hash) {
    if (value > 0) {
      return key;
    }
  }
}

//* 다른 풀이
function solution(participant, completion) {
  let obj = {};

  participant.forEach((started) => {
    if (obj[started] > 0) {
      obj[started]++;
    } else {
      obj[started] = 1;
    }
  });

  completion.forEach((finished) => {
    obj[finished]--;
  });

  return Object.keys(obj)
    .filter((el) => obj[el] > 0)
    .toString();
}

console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
