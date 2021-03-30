const fourSum = (nums, target) => {
  nums.sort((a, b) => a - b);
  // console.log(nums);

  let result = [];

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let start = j + 1,
        end = nums.length - 1;
      while (start < end) {
        let sum = nums[i] + nums[j] + nums[start] + nums[end];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[start], nums[end]]);
          start++;
          end--;
          while (start < end && nums[start] === nums[start - 1]) state++;
          while (start < end && nums[end] === nums[end + 1]) end--;
        } else if (sum > target) {
          end--;
        } else {
          start++;
        }
      }
      while (nums[j] === nums[j + 1]) j++;
    }
    while (nums[i] === nums[i + 1]) i++;
  }
  return console.log(result);
};

fourSum([1, 0, -1, 0, -2, 2], 0);
