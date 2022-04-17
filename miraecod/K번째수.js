// ? https://programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
  let binarr = commands.map((index) => {
    return array.slice(index[0] - 1, index[1]).sort((y, z) => y - z)[
      index[2] - 1
    ];
  });

  return binarr;
}

// function solution(array, commands) {
//   let answer = [];
//   let binarr = [];
//   let i, j, k;

//   for (let a = 0; a < commands.length; a++) {
//     i = commands[a][0];
//     j = commands[a][1];
//     k = commands[a][2];

//     for (let b = i; b <= j; b++) {
//       binarr.push(array[b - 1]);
//     }
//     binarr.sort((y, z) => y - z);
//     answer.push(binarr[k - 1]);
//     binarr = [];
//   }

//   return answer;
// }
