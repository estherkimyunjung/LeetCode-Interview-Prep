// const reverseString = (sArray) => {
//   // console.log(sArray.reverse());

//   let left = 0,
//     right = sArray.length - 1;

//   while (left < right) {
//     [sArray[left], sArray[right]] = [sArray[right], sArray[left]];
//     left++;
//     right--;
//   }

//   console.log(sArray);
// };

// recursion solution

const reverseString = (sArray) => {
  reverse(sArray, 0, sArray.length - 1);
};

function reverse(s, beginning, end) {
  if (beginning >= end) {
    return console.log(s);
  }

  [s[beginning], s[end]] = [s[end], s[beginning]];
  reverse(s, beginning + 1, end - 1);
}

reverseString(["h", "e", "l", "l", "o"]);
