/*  input: two string, output: index first occurrence of needle
    No needle in the haystack return -1
    if needle is "" return 0
    haystack can be ""
    In string, all characters are lower-case
*/

//  Solution 1
// const strStr = (haystack, needle) => needle ? haystack.split(needle)[0].length === haystack.length ? -1 : haystack.split(needle)[0].length : 0

//  Solution 2
// const strStr = (haystack, needle) => {
//   if (needle === "") return 0;

//   if (haystack.includes(needle)) {
//     let needleArr = haystack.split(needle);
//     return needleArr[0].length;
//   } else {
//     return -1;
//   }
// };

//  Solution 3
const strStr = (haystack, needle) => {
  /* indexOf() method 
  return 0 (needle is empty string), 
  return -1 (if the value is not found or haystack.length is less than needle), 
  return index */

  return console.log(haystack.indexOf(needle));
};

//  Solution 4
// const strStr = (haystack, needle) => {
//   let needleLen = needle.length,
//     haystackLen = haystack.length;
//   if (needleLen === 0) return 0;
//   let idx = 0,
//     count = 0;

//   while (idx < haystackLen && count < needleLen) {
//     if (haystack[idx] === needle[count]) {
//       count++;
//     } else {
//       if (count > 0) {
//         idx = idx - count;
//       }
//       count = 0;
//     }
//     idx++;
//   }

//   return console.log(count === needleLen ? idx - needleLen : -1);
// };

strStr("mississippi", "issi");
strStr("mississippi", "issip");
strStr("aaaaa", "bba");
strStr("", "issip");
strStr("", "");
strStr("a", "");
