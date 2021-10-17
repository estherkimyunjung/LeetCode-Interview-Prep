// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
// Return any array that satisfies this condition.

// Constraints:
// 1 <= nums.length <= 5000
// 0 <= nums[i] <= 5000

//ask - 1. can we mutate input array or create new array
// 2. order of input and output
// 3. empty array?

const sortArrayByParity = (nums) => {
  // console.log(nums);
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    // check the nums is odd
    if (nums[left] % 2 !== 0) {
      // if the nums is odd move to right side (back of the array)
      [nums[left], nums[right]] = [nums[right], nums[left]];
      // only move right pointer bc left nums might be odd
      right--;

      // if the nums is even
    } else {
      left++;
    }
  }
  return console.log(nums);
};

sortArrayByParity([3, 1, 2, 4]);
sortArrayByParity([3, 1, 2, 5]);
sortArrayByParity([10, 3, 1, 2, 5, 8]);
