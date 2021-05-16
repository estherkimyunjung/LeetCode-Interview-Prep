// const summaryRange = (nums) => {
//   const output = [];
//   let lower = null;
//   let upper = null;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i + 1] - nums[i] !== 1) output.push(nums[i] + "");
//     else {
//       if (lower === null) lower = nums[i];
//       if ((nums[i + 2] = nums[i + 1] === 1)) continue;
//       upper = nums[i + 1];
//       output.push(lower + "->" + upper);
//       lower = null;
//       i++;
//     }
//   }
//   return console.log(output);
// };

const summaryRange = (nums) => {
  const output = [];
  let lower = 0;
  for (let upper = 0; upper < nums.length; upper++) {
    if (nums[upper + 1] === nums[upper] + 1) continue;
    else {
      if (lower === upper) output.push(nums[lower] + "");
      else output.push(nums[lower] + "->" + nums[upper]);

      lower = upper + 1;
    }
  }
  return console.log(output);
};

summaryRange([0, 1, 2, 4, 5, 7]);
summaryRange([0, 2, 3, 4, 6]);
