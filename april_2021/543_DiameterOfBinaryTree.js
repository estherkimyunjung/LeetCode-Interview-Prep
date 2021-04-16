function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const diamterOfBinaryTree = function (root) {
  let maxDepth = 0;

  const depth = (node) => {
    let left = depth(node.left);
    let right = depth(node.right);

    maxDepth = Math.max(maxDepth, left + right);
    // return left + right + 1;
    return Math.max(left, right) + 1;
  };

  depth(root);
  return console.log(maxDepth);
};

diamterOfBinaryTree([1, 2, 3, 4, 5]);
