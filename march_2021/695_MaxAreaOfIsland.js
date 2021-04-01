const maxAreaOfIsland = (grid) => {
  let maxArea = 0;
  let area = 0;

  let findArea = (i, j) => {
    if (
      i < 0 ||
      j < 0 ||
      i > grid.length - 1 ||
      j > grid[0].length - 1 ||
      grid[i][j] === 0
    )
      return;

    area++;
    grid[i][j] = 0;
    findArea(i, j + 1);
    findArea(i + 1, j);
    findArea(i, j - 1);
    findArea(i - 1, j);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        area = 0;
        findArea(i, j);
        maxArea = Math.max(maxArea, area);
      }
    }
  }

  return console.log(maxArea);
};

maxAreaOfIsland([
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
]);
