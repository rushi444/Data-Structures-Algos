const bubbleSort = (array) => {
  let isSorted = false;
  let counter = 0;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swapNumbers(i, i + 1, array);
        isSorted = false;
      }
    }
    counter++;
  }
  return array;
};

const swapNumbers = (x, y, array) => {
  let temp = array[x];
  array[x] = array[y];
  array[y] = temp;
};
