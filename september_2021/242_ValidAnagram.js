const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const sCharMap = buildCharMap(s);
  const tCharMap = buildCharMap(t);

  // console.log(sCharMap);
  for (let char in sCharMap) {
    if (sCharMap[char] !== tCharMap[char]) return console.log(false);
  }
  return console.log(true);
};

function buildCharMap(string) {
  const charMap = {};

  for (let char of string) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

isAnagram("test", "asbc");
isAnagram("test", "estt");
