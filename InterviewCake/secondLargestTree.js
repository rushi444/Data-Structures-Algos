function findSecondLargest(treeRoot) {
  if (!treeRoot || (!treeRoot.left && !treeRoot.right)) {
    throw new Error('need at least one child');
  }

  let current = treeRoot;

  while (current) {
    if (current.left && !current.right) {
      return findLargest(current.left);
    }

    if (current.right && !current.right.left && !current.right.right) {
      return current.value;
    }
    current = current.right;
  }
}

const findLargest = (rootNode) => {
  let current = rootNode;

  while (current) {
    if (!current.right) return current.value;
    current = current.right;
  }
};
