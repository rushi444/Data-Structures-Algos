const minIncrementForUnique = A => {
  A.sort((a, b) => a - b);

  let result = 0;

  for (let i = 1; i < A.length; i++) {
    while (A[i] <= A[i - 1]) {
      A[i] += 1;

      result += 1;
    }
  }

  return result;
};
