//Input: l1 = [2,4,3], l2 = [5,6,4]
//342 + 465 = 807
//Output: [7,0,8]

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// const addTwoNumbers = (l1, l2) => {
//   let sum = 0, tem = new ListNode(), l3 = temp, rem = 0;

//   if(!l1) return l2;
//   if(!l2) return l1;

//   while(l1 || l2) {
//     sum = (rem + (l1?.val || 0) + (l2?.val || 0));
//     rem = Math.floor(sum / 10);
//     sum = sum % 10;

//     temp.next = new ListNode(sum);
//     temp = temp.next;

//     l1 = l1?.next;
//     l2 = l2?.next;

//     if(rem){
//       temp.next = new ListNode(rem)
//     }
//     return l3.next;
// }

//create new listNode for l3
//carryOver => (l1.val + l2.val) / 10
//remVal => (l1.val + l2.val) % 10

const addTwoNumbers = (l1, l2) => {
  let l3 = new ListNode(0);
  let num1 = l1;
  let num2 = l2;
  let current = l3;
  let carryOver = 0;

  while (num1 !== null || num2 !== null) {
    let x = num1 !== null ? num1.val : 0;
    let y = num1 !== null ? num2.val : 0;
    let sum = x + y + carryOver;

    carryOver = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (num1 !== null) {
      num1 = num1.next;
    }

    if (num2 !== null) {
      num2 = num2.next;
    }
  }

  if (carryOver > 0) {
    current.next = new ListNode(1);
  }

  return l3;
};

addTwoNumbers((l1 = [2, 4, 3]), (l2 = [5, 6, 4]));
