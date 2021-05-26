// Example 1:
// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// Example 2:
// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".

// Example 3:
// Input: s = "a##c", t = "#a#c"
// Output: true
// Explanation: Both s and t become "c".

// Example 4:
// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

const backspaceCompare = (s, t) => {
  const outputS = [];
  const outputT = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") outputS.pop();
    else outputS.push(s[i]);
  }

  for (let i = 0; i < s.length; i++) {
    if (t[i] === "#") outputT.pop();
    else outputT.push(t[i]);
  }
  return console.log(outputS.join("") === outputT.join(""));
};

backspaceCompare("a#c", "b");
backspaceCompare("a##c", "#a#c");
