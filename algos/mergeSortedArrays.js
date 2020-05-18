function mergeSortedArrays(arrays) {
  return arrays.reduce((a, b) => mergeSortHelper(a, b));
}

const mergeSortHelper = (leftHalf, rightHalf) => {
  const sortedArray = new Array(leftHalf.length + rightHalf.length);

  let leftHalfIdx = 0;
  let rightHalfIdx = 0;
  let currentIdx = 0;

  while (leftHalfIdx < leftHalf.length && rightHalfIdx < rightHalf.length) {
    if (leftHalf[leftHalfIdx] <= rightHalf[rightHalfIdx]) {
      sortedArray[currentIdx++] = leftHalf[leftHalfIdx++];
    } else {
      sortedArray[currentIdx++] = rightHalf[rightHalfIdx++];
    }
  }
  while (leftHalfIdx < leftHalf.length) {
    sortedArray[currentIdx++] = leftHalf[leftHalfIdx++];
  }
  while (rightHalfIdx < rightHalf.length) {
    sortedArray[currentIdx++] = rightHalf[rightHalfIdx++];
  }
  return sortedArray;
};
