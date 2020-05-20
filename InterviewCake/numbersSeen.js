function findRepeat(numbers) {
  const numbersSeen = new Set();

  for (let num of numbers) {
    if (numbersSeen.has(num)) {
      return num;
    }
    numbersSeen.add(num);
  }
}
