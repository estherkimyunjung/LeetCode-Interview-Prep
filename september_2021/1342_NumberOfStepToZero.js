var numberOfSteps = function (num) {
  if (!num) return 0;
  let count;

  if (num % 2 === 0) {
    count = 1 + numberOfSteps(num / 2);
  } else {
    count = 1 + numberOfSteps(num - 1);
  }
  return count;
};
