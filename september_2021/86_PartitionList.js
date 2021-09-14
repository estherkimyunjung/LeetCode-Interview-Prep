function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// const partition = (head, x) => {
//   if (head === null) return head;
//   let dummyHead = new ListNode(0, head);
//   let beforePointer = dummyHead;
//   // find the first node with val greater or equal then x
//   // point to one node before
//   while (beforePointer.next.val < x) {
//     beforePointer = beforePointer.next;
//     // if reaching the end, then simply return
//     if (!beforePointer.next) return head;
//   }

//   // scan the rest and find node val less than x
//   let preHead = beforePointer.next;
//   while (preHead.next) {
//     let head = preHead.next;
//     if (head.val >= x) {
//       preHead = head;
//       continue;
//     }
//     // move the node only needed
//     preHead.next = head.next;
//     head.next = beforePointer.next;
//     beforePointer.next = head;
//     beforePointer = head;
//   }
//   return dummyHead.next;
// };

const partition = (head, x) => {
  const leftHead = new ListNode(0);
  const rightHead = new ListNode(0);

  let leftPointer = leftHead;
  let rightPointer = rightHead;

  while (head) {
    if (head.val < x) {
      leftPointer.next = head;
      leftPointer = leftPointer.next;
    } else {
      rightPointer.next = head;
      rightPointer = rightPointer.next;
    }
    head = head.next;
  }

  rightPointer.next = null;
  leftPointer.next = rightHead.next;

  return leftHead.next;
};
