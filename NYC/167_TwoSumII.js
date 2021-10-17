// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
// find two numbers such that they add up to a specific target number.
// Let these two numbers be numbers[index1] and numbers[index2]
// where 1 <= first < second <= numbers.length.

// Return the indices of the two numbers, index1 and index2, as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Constraints:
// 2 <= numbers.length <= 3 * 104
// -1000 <= numbers[i] <= 1000
// numbers is sorted in non-decreasing order.
// -1000 <= target <= 1000
// The tests are generated such that there is exactly one solution.

// 1. array -> f -> return array of two numbers
// 2. ask contraints - input array is sorted in increasing,
// exactly one solution,
// return index(index start at 1)

// const twoSum = (numbers, target) => {
//   if (numbers.length < 2) {
//     console.log("undefined");
//     return null;
//   }

//   let firstPointer = 0,
//     secondPointer = numbers.length - 1;

//   while (firstPointer < secondPointer) {
//     if (numbers[firstPointer] + numbers[secondPointer] === target) {
//       console.log([firstPointer + 1, secondPointer + 1]);
//       return [firstPointer + 1, secondPointer + 1];
//     } else if (numbers[firstPointer] + numbers[secondPointer] > target) {
//       secondPointer--;
//     } else {
//       firstPointer++;
//     }
//   }
// };

const twoSum = (numbers, target) => {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    if (sum < target) left++;
    if (sum > target) right--;
  }
};

twoSum([2, 7, 11, 15], 9);
twoSum([2, 3, 4], 6);
twoSum([2], 6);
