const coinChange = (A, T) => {
  let N = A.length;
  let go = (i = 0, t = T) => {
    if (!t) return 0;
    if (i == N) return Infinity;
    return Math.min(
      1 + (0 <= t - A[i] ? go(i, t - A[i]) : Infinity),
      go(i + 1, t),
    ); // min(1 + with, without)
  };
  let ans = go();
  return ans < Infinity ? ans : -1;
};
