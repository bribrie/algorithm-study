function solution(A, K) {
  // A = [3, 8, 9, 7, 6] / K = 3

  for (let i = 0; i < K; i++) {
    let lastA = A.pop();
    A.unshift(lastA);
  }

  return A;
}
