// Definition for singly-linked list.

// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }

// @param {ListNode} head
// @return {boolean}

const reverse = (head) => {
  let preNode = null;

  while (head) {
    let nextNode = head.next;
    head.next = preNode;
    preNode = head;
    head = nextNode;
  }
  return preNode;
};

const isPalindrome = (head) => {
  let fast = head;
  let slow = head;

  while (fast && fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  fast = head;
  slow = reverse(slow);

  while (slow) {
    if (slow.val !== fast.val) return false;
    slow = slow.next;
    fast = fast.next;
  }

  return true;
};
