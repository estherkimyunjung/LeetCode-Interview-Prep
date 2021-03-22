// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]

// const twoSum = (nums, target) => {
//   if (nums.length >= 2) {
//     for (let i = 0; i < nums.length; i++) {
//       for (let j = 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target && i !== j) {
//           return [i, j];
//         }
//       }
//     }
//   } else {
//     return undefined;
//   }
// };

// const twoSum = (nums, target) => {
//   if (nums.length >= 2) {
//     const numChart = {};
//     for (let i = 0; i < nums.length; i++) {
//       if (target - nums[i] in numChart) {
//         return console.log([numChart[target - nums[i]], i]);
//       } else {
//         numChart[nums[i]] = i;
//       }
//     }
//   } else {
//     return undefined;
//   }
// };

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (
      nums.lastIndexOf(target - nums[i]) !== i &&
      nums.lastIndexOf(target - nums[i] >= 0)
    ) {
      return console.log([i, nums.lastIndexOf(target - nums[i])]);
    }
  }
};

twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);
