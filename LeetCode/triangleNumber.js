var triangleNumber = function (nums) {
  //similar to two sum
  if (!nums || nums.length < 3) return 0;
  nums.sort((a, b) => a - b);

  //A[i] < A[j] < A[k]
  //determine if A[j] + A[i] > A[k]
  var left = 0;
  var right = nums.length - 1;
  var ans = 0;
  for (let i = 0; i < nums.length; i++) {
    left = 0;
    right = i - 1;
    while (left < right) {
      if (nums[left] + nums[right] > nums[i]) {
        ans = ans + (right - left);
        right--;
      } else {
        left++;
      }
    }
  }
  return ans;
};
