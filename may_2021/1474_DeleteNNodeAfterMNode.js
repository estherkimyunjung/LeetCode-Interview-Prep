const util = require("util");
// console.log(util.inspect(console));

// Give the head of linked list and two integers m and n.
// Traverse the linked list and remove some nodes in the following way:

// Start with the head as the curent node.
// Keep repoating steps and 3 until you reach the end of the list.
// Remove the nest n nodes.
// Keep repeating step 2 and 3 until you reach the end of the list.
// Return the head of the modified list after removing the mentioned nodes.

// How can you solve this problem by modifying the list in-place?

// Time: O(N) Space:O(1)

class Node {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class SLL {
  constructor(array) {
    this.head = null;

    array.forEach((cv) => this.push(cv));
  }

  push(val) {
    const node = new Node(val);
    let current = this.head;

    if (!this.head) return (this.head = node);
    else {
      while (current.next) {
        current = current.next;
      }
    }
    current.next = node;
  }

  deleteNode(m, n) {
    let current = this.head;
    let count = 1;
    let keepNode;

    if (!this.head) return;

    while (current) {
      if (count === m) keepNode = current;
      if (count === m + n) {
        keepNode.next = current.next;
        count = 0;
      }
      if (!current.next && m - count < 0) {
        console.log("current :", current);
        console.log("m-count :", m - count);
        keepNode.next = null;
      }
      current = current.next;
      count++;
    }

    return this.head;
  }

  deleteNode2(m, n) {
    let current = this.head;
  }

  deleteNode3(m, n) {
    let current = this.head;
  }
}

const sll1 = new SLL([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
console.log(util.inspect(sll1.deleteNode(2, 3), { depth: null }));
