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

// Using a heap(more efficient)

function mergeSortedArrays(arrays) {
  const sortedList = [];
  const smallestItems = [];
  for (let arrayIdx = 0; arrayIdx < arrays.length; arrayIdx++) {
    smallestItems.push({
      arrayIdx,
      elementIdx: 0,
      num: arrays[arrayIdx][0],
    });
    const minHeap = new minHeap(smallestItems);
    while (!minHeap.isEmpty()) {
      const { arrayIdx, elementIdx, num } = minHeap.remove();
      sortedList.push(num);
      if (elementIdx === arrays[arrayIdx].length - 1) continue;
      minHeap.insert({
        arrayIdx,
        elementIdx: elementIdx + 1,
        num: arrays[arrayIdx][elementIdx + 1],
      });
    }
  }
  return sortedList;
}
