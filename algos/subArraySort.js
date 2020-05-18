function subarraySort(array) {
  let minOutOfOrder = Infinity;
  let maxOutOfOrder = -Infinity;
  array.forEach((num, i) => {
    if (isOutOfOrder(i, num, array)) {
      minOutOfOrder = Math.min(minOutOfOrder, num);
      maxOutOfOrder = Math.max(maxOutOfOrder, num);
    }
  });
  if (minOutOfOrder === Infinity) return [-1, 1];
  let subArrayLeftIdx = 0;
  while (minOutOfOrder >= array[subArrayLeftIdx]) {
    subArrayLeftIdx++;
  }
  let subArrayRightIdx = array.length - 1;
  while (maxOutOfOrder <= array[subArrayRightIdx]) {
    subArrayRightIdx--;
  }
  return [subArrayLeftIdx, subArrayRightIdx];
}

const isOutOfOrder = (i, num, array) => {
  if (i === 0) return num > array[i + 1];
  if (i === array.length - 1) return num < array[i - 1];
  return num > array[i + 1] || num < array[i - 1];
};
