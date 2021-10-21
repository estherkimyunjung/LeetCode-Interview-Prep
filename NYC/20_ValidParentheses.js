// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// string -> f -> boolean;
// test case:
// 1."()" -> f -> true;
// 2."()[]{}" -> f -> true;
// 3."(]" -> f -> false;
// 4."([)]" -> f -> false;
// 5."{[]}" -> f -> true;
// 6."([{" -> f -> false;

const isValid = (str) => {
  // return false if input is odd length
  if (str.length % 2 !== 0) return console.log(false);

  // initialize stack to keep track of open brackets
  const stack = [];
  // initialize map for matching pairs
  const parenthesesMap = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  // iterate over input
  for (const element of str) {
    // if open bracket push to stack
    if (parenthesesMap.has(element)) {
      stack.push(element);
    } else if (stack.length !== 0) {
      // get last open bracket
      const lastOpen = stack.pop();
      // return false if no match
      if (parenthesesMap.get(lastOpen) !== element) return console.log(false);
    } else {
      ////return false if the stack is not existing to pair with an element
      return console.log(false);
    }
  }

  // return true if stack empty
  return console.log(stack.length === 0);
};

isValid("()");
isValid("()[]{}");
isValid("(]");
isValid("([)]");
isValid("{[]}");
isValid("([{");
