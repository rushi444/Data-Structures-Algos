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

var removeZeroSumSublists = function (head) {
  let sum = 0,
    dummy = { val: 0, next: head },
    map = { 0: [dummy] };
  while (head) {
    sum += head.val;
    if (sum in map) map[sum].forEach((node) => (node.next = head.next));
    map[sum] ? map[sum].push(head) : (map[sum] = [head]);
    head = head.next;
  }
  return dummy.next;
};
