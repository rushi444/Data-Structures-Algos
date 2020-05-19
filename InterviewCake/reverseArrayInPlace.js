function reverse(arrayOfChars) {
  let leftIdx = 0;
  let rightIdx = arrayOfChars.length - 1;

  while (leftIdx < rightIdx) {
    swap(leftIdx, rightIdx, arrayOfChars);
    leftIdx++;
    rightIdx--;
  }
}

const swap = (i, j, array) => {
  temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};
