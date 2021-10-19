//ask any array is can be empty input?

const merge = (nums1, m, nums2, n) => {
  // let i = 0;

  // while (n > 0) {
  //   nums1[m + i] = nums2[i];
  //   n--;
  //   i++;
  // }
  // console.log(nums1);
  // console.log(nums1.sort((a, b) => a - b));

  // better to approach from end because this each array is sorted
  let nums1Index = m - 1,
    nums2Index = n - 1;

  // console.log(nums1.length);
  for (let i = nums1.length - 1; i >= 0; i--) {
    if (nums2Index < 0) {
      // this condition is important!! need to stop when nums2 array is empty
      break;
    }
    if (nums1Index >= 0 && nums1[nums1Index] > nums2[nums2Index]) {
      nums1[i] = nums1[nums1Index];
      nums1Index--;
    } else {
      nums1[i] = nums2[nums2Index];
      nums2Index--;
    }
  }
  console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([0], 0, [1], 1);
merge([2, 0], 1, [1], 1);
