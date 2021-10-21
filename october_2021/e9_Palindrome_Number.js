// Given an integer x, return true if x is palindrome interger, otherwise return
// An integer is palindrom when it reads the same backward as forward

// integer -> f -> boolean
// test case :
// 1. 121 -> f -> true
// 2. -121 -> f -> false (121-: this is not a palindrome)
// 3. 10 -> false

// const isPalindrome = (x) => {
//   let reverseX = x.toString().split("").reverse().join("");
//   // console.log(reverseX);

//   return console.log(x === parseInt(reverseX));
// };

const isPalindrome = function (x) {
  if (x < 0) return console.log(false);

  let n = x;
  let rev = 0;
  while (n) {
    let last = n % 10;
    rev = rev * 10 + last;
    n = Math.floor(n / 10);
  }
  return console.log(rev === x);
};

isPalindrome(123);
isPalindrome(121);
isPalindrome(-121);
