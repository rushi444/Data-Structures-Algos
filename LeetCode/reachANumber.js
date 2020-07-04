const reachNumber = (target) => {
  let sum = 0;
  let i = 0;
  let t = Math.abs(target);

  i = Math.ceil(Math.sqrt(2 * t + 0.25) - 0.5);
  sum = (i * i + i) / 2;

  const rem = sum - t;

  if (rem % 2 === 0) return i;
  else if ((rem + i + 1) % 2 === 0) return i + 1;
  else return i + 2;
};
