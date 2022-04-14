function solution(board, moves) {
  let answer = 0;
  let stack = [];

  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let item = board[i][pos - 1];
        board[i][pos - 1] = 0;
        //같은 경우, pop과 answer+=2
        if (item === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else {
          //다른 경우, stack에 push
          stack.push(item);
        }
        break;
      }
    }
  });
  return answer;
}
