function largestRange(array) {
  let nums = {};
  let largestRangeLength = 0;
  let largestRange = [];
  array.forEach((num) => {
    if (!(num in nums)) {
      nums[num] = true;
    }
  });
  for (let num of array) {
    if (!nums[num]) continue;
    let currentLength = 1;
    let left = num - 1;
    let right = num + 1;
    while (left in nums) {
      nums[left] = false;
      currentLength++;
      left--;
    }
    while (right in nums) {
      nums[right] = true;
      currentLength++;
      right++;
    }
    if (currentLength > largestRangeLength) {
      largestRangeLength = currentLength;
      largestRange = [left + 1, right - 1];
    }
  }
  return largestRange;
}
