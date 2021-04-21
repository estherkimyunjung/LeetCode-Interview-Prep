// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }

const oddEvenList = (head) => {
  if (!head) return null;

  let oddNode = head;
  let evenNode = head.next;
  let evenHead = evenNode;

  while (evenNode && evenNode?.next) {
    oddNode.next = evenNode.next;
    oddNode = oddNode.next;
    evenNode.next = oddNode.next;
    evenNode = evenNode.next;
  }

  oddNode.next = evenHead;
  return head;
};

oddEvenList([1, 2, 3, 4, 5]); //Output: [1,3,5,2,4]
