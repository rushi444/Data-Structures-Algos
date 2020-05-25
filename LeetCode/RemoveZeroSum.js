const removeZeroSumSublists = (head) => {
  if (!head) return null;

  let current = head;
  let runningSum = 0;

  while (current) {
    runningSum += current.val;
    if (runningSum === 0) {
      return removeZeroSumSublists(current.next);
    } else {
      current = current.next;
    }
  }
  head.next = removeZeroSumSublists(head.next);
  return head;
};
