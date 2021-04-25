const findJudge = (N, trust) => {
  let trustCounts = new Array(N + 1).fill(0);

  for (let [i, j] of trust) {
    trustCounts[i] -= 1;
    trustCounts[j] += 1;
  }

  for (let i = 0; i < trustCounts.length; i++) {
    if (trustCounts[i] === N - 1) {
      return console.log(i);
    }
  }
  return console.log(-1);
};

findJudge(2, [[1, 2]]);
findJudge(3, [
  [1, 3],
  [2, 3],
]);
findJudge(3, [
  [1, 3],
  [2, 3],
  [3, 1],
]);
