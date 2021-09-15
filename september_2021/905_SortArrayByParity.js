// input is array, output is array
// move odd nums to right, even nums to left
// use two pointer
// no empty arr for input
// no negitive value for input

const sortArrayByParity = (nums) => {
  let evenPointer = 0;
  let oddPointer = nums.length - 1;

  while (evenPointer < oddPointer) {
    if (nums[evenPointer] % 2 !== 0) {
      [nums[evenPointer], nums[oddPointer]] = [
        nums[oddPointer],
        nums[evenPointer],
      ];
      oddPointer--;
    } else {
      evenPointer++;
    }
  }
  return console.log(nums);
};
sortArrayByParity([3, 1, 2, 4]);
