// Given an integer x, return true if x is palindrome interger, otherwise return
// An integer is palindrom when it reads the same backward as forward

// integer -> f -> boolean
// test case :
// 1. 121 -> f -> true
// 2. -121 -> f -> false (121-: this is not a palindrome) - if wnat to keep sign then Math.sign(x) will pass same sign
// 3. 10 -> false

// const isPalindrome = (x) => {
//   let reverseX = x.toString().split("").reverse().join("");
//   // console.log(reverseX);

//   return console.log(x === parseInt(reverseX));
// };

// const isPalindrome = function (x) {
//   if (x < 0) return console.log(false);

//   let n = x;
//   let rev = 0;
//   while (n) {
//     let last = n % 10;
//     rev = rev * 10 + last;
//     n = Math.floor(n / 10);
//   }
//   return console.log(rev === x);
// };

// var isPalindrome = function(x) {
//   if (x < 0) {
//       return false;
//   }
//   if (x < 10) {
//       return true;
//   }

//   let num = x;
//   let result = 0;
//   while (num > 0) {
//       result += num % 10;
//       num = Math.trunc(num / 10);
//       if (num > 0) {
//           result *= 10;
//       }
//   }

//   return result === x;
// };

var isPalindrome = function (x) {
  x = "" + x; //convert number to string
  let left = 0,
    right = x.length - 1; //moving from both limits to the center

  while (left <= right) {
    //iteration only while  left != right and both less equal to n/2
    if (x[left] !== x[right]) return console.log(false); //at the first error drop
    left++;
    right--;
  }

  return console.log(true);
};

// var isPalindrome = function (x) {
//   var str = "" + x;

//   for (var i = 0; i < Math.floor(str.length / 2); i++) {
//     if (str[i] != str[str.length - i - 1]) return console.log(false);
//   }

//   return console.log(true);
// };

isPalindrome(123);
isPalindrome(121);
isPalindrome(-121);
