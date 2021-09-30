var reverseString = function (s) {
  reverse(s, 0, s.length - 1);
};

function reverse(s, beginIndex, endIndex) {
  if (beginIndex >= endIndex) {
    return;
  }

  // const first = s[beginIndex];
  // const last = s[endIndex];
  // s[beginIndex] = last;
  // s[endIndex] = first;

  [s[beginIndex], s[endIndex]] = [s[endIndex], s[beginIndex]];
  reverse(s, beginIndex + 1, endIndex - 1);
}
