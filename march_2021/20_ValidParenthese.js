// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.

var isValid = function (s) {
  const obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack = [];

  for (const paran of s) {
    if (obj.hasOwnProperty(paran)) {
      stack.push(paran);
    } else {
      const closeParan = stack.pop();
      if (paran !== obj[closeParan]) {
        return console.log(false);
      }
    }
  }

  return console.log(stack.length === 0);
};

isValid("([)]");
isValid("()[]{}");
