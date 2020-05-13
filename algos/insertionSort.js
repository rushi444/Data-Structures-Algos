function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swapNumbers(j, j - 1, array);
      j--;
    }
  }
  return array;
}

const swapNumbers = (x, y, array) => {
  let temp = array[x];
  array[x] = array[y];
  array[y] = temp;
};
