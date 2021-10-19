// array -> f -> array
// ask 1. input array can be empty? what should I return?
// ask 2. input element can be negitive number?
// ask 3. output must return as sort array?

// const sortedSquares = (nums) => {
//   if (nums.length === 0) return null;

//   nums = nums.map((n) => n * n);
//   // console.log(nums);
//   let result = new Array(nums.length);
//   let left = 0,
//     right = nums.length - 1,
//     index = result.length - 1;

//   while (left <= right && index >= 0) {
//     if (nums[left] > nums[right]) {
//       result[index] = nums[left];
//       left++;
//     } else {
//       result[index] = nums[right];
//       right--;
//     }
//     index--;
//   }

//   console.log(result);
// };

const sortedSquares = (nums) => {
  return console.log(nums.map((num) => Math.pow(num, 2)).sort((a, b) => a - b)); // sort ascending
};

sortedSquares([-4, -1, 0, 3, 10]);
