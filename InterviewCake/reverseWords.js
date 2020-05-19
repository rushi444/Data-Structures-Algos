function reverseWords(message) {
  reverseCharacters(0, message.length - 1, message);

  let firstLetter = 0;

  for (let i = 0; i <= message.length; i++) {
    if (message[i] === ' ' || i === message.length) {
      reverseCharacters(firstLetter, i - 1, message);
      firstLetter = i + 1;
    }
  }
}

const reverseCharacters = (left, right, array) => {
  while (left < right) {
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;
    left++;
    right--;
  }
};
