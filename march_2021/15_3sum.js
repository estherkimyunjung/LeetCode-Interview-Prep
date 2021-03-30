const threeSum = (nums, target) => {
  if (nums.length < 3) return [];

  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    let start = i + 1,
      end = nums.length - 1;
    while (start < end) {
      let sum = nums[i] + nums[start] + nums[end];

      if (sum === target) {
        result.push([nums[i], nums[start], nums[end]]);
        start++;
        end--;
        while (start < end && nums[start] === nums[start - 1]) start++;
        while (start < end && nums[end] === nums[end + 1]) end--;
      } else if (sum > target) {
        end--;
      } else {
        start++;
      }
    }
    while (nums[i] === nums[i + 1]) i++;
  }
  return console.log(result);
};

threeSum([-1, 0, 1, 2, -1, -4], 0);
