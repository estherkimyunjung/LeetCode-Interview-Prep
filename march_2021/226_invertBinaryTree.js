// Given the root of a binary tree, invert the tree, and return its root.

const invertTree = (root) => {
  if (root) {
    invertTree(root.left);
    invertTree(root.right);

    let temp = root.left;
    root.left = root.right;
    root.right = temp;
  }
  return console.log(root);
};

// const invertTree = (root) => {
//     let head = root;

//     let queue = new Array;
//     queue.push(root);

//     while(queue.length > 0){
//         let node = queue.shift();

//         if(node){
//             queue.push(node.left);
//             queue.push(node.right);
//             let temp = node.left;
//             node.left = node.right;
//             node.right = temp;
//         }
//     }
//     return head;
// };

//invertTree((root = [4, 2, 7, 1, 3, 6, 9]));
