// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

const maxNumberOfBalloons = function (text) {
  const charMap = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0,
  };

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (charMap[char] || charMap[char] === 0) charMap[char] += 1;
  }

  let ban = Math.min(charMap["b"], charMap["a"], charMap["n"]);

  let lo = Math.floor(Math.min(charMap["l"] / 2, charMap["o"] / 2));

  let balloonCount = Math.min(ban, lo);

  return console.log(balloonCount);
};

maxNumberOfBalloons("nlaebolko");
maxNumberOfBalloons("loonbalxballpoon");
maxNumberOfBalloons("leetcode");
