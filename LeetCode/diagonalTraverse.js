const findDiagonalOrder = (nums) => {
  let map = new Map();
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (map.has(i + j)) {
        map.get(i + j).push(nums[i][j]);
      } else {
        map.set(i + j, [nums[i][j]]);
      }
    }
  }
  map.forEach((el) => {
    for (let i = el.length - 1; i >= 0; i--) {
      res.push(el[i]);
    }
  });
  return res;
};
