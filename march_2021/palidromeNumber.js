// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is palindrome while 123 is not.

// Input: x = 121
// Output: true

// Input: x = -121
// Output: false

// Input: x = 10
// Output: false

// Input: x = -101
// Output: false

// const isPalindrome = (x) => {
//   if (x < 0) {
//     return console.log(false);
//   }

//   let rev = x.toString().split("").reverse().join("");
//   console.log("rev", rev);
//   console.log("x", x.toString());
//   return rev === x.toString() ? console.log(true) : console.log(false);
// };

// let x = 101;
// console.log(typeof x.toString().split("")); -> array !== string

// const isPalindrome = (x) => {
//   if (x < 0) {
//     return console.log(false);
//   }
//   let rev = parseInt(x.toString().split("").reverse().join(""));
//   rev === x ? console.log(true) : console.log(false);
// };

const isPalindrome = (x) => {
  if (x < 0) {
    return console.log(false);
  }
  let reverse = parseInt(
    x
      .toString()
      .split("")
      .reduce((rev, char) => char + rev, "")
  );
  reverse === x ? console.log(true) : console.log(false);
};

isPalindrome(101);
isPalindrome(-121);
