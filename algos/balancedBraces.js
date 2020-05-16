const balancedBrackets = (string) => {
  let stack = [];
  const openingBrackets = '([{';
  const closingBrackets = ')]}';
  const matchingBrackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  for (const element of string) {
    if (openingBrackets.includes(element)) {
      stack.push(element);
    } else if (closingBrackets.includes(element)) {
      if (stack.length === 0) {
        return false;
      }
      if (stack[stack.length - 1] === matchingBrackets[element]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
