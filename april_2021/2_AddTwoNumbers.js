//Input: l1 = [2,4,3], l2 = [5,6,4]
//342 + 465 = 807
//Output: [7,0,8]

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const addTwoNumbers = (l1, l2) => {
  let sum = 0, tem = new ListNode(), l3 = temp, rem = 0;

  if(!l1) return l2;
  if(!l2) return l1;

  while(l1 || l2) {
    sum = (rem + (l1?.val || 0) + (l2?.val || 0));
    rem = Math.floor(sum / 10);
    sum = sum % 10;

    temp.next = new ListNode(sum);
    temp = temp.next;

    l1 = l1?.next;
    l2 = l2?.next;

    if(rem){
      temp.next = new ListNode(rem)
    }
    return l3.next;
}

addTwoNumbers(l1 = [2,4,3], l2 = [5,6,4]);