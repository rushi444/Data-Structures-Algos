function isBalanced(treeRoot) {
  let currentNode = treeRoot;
  let minLeaf = Infinity;
  let maxLeaf = -Infinity;

  checkLeaf(treeRoot, minLeaf, maxLeaf);

  return Math.abs(maxLeaf - minLeaf) <= 1;
}

const checkLeaf = (node, min, max) => {
  if (!node.left && !node.right) {
    if (node.value < min) {
      min = node.value;
    }
    if (node.value > max) {
      max = node.value;
    }
  } else {
    if (node.right) {
      checkLeaf(node.right, min, max);
    }
    if (node.left) {
      checkLeaf(node.left, min, max);
    }
  }
};
