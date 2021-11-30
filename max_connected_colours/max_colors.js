const n = 3;
const m = 4;

let visited = new Array(m).fill(0).map(() => new Array(n).fill(0));

let count;

/**
 * Checks if the cell is valid as in if the visited cell inside the grid
 * and equal to key
 */
const isValid = (x, y, key, input) => {
  if (x < n && y < m && x >= 0 && y >= 0)
  {
    if (visited[x][y] == 0 &&
      input[x][y] == key) {
      return true;
      }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}

/**
 * BreadthFirstSearch implementation
 */
const BreadthFirstSearch = (x, y, i, j, input) => {
  if (x != y)
      return;

  visited[i][j] = 1;
  count++;

  let x_move = [0, 0, 1, -1];
  let y_move = [1, -1, 0, 0];

  for (let u = 0; u < 4; u++) {
      if ((isValid(i + y_move[u],
           j + x_move[u], x, input)) == true) {
           BreadthFirstSearch(x, y, i + y_move[u],
                    j + x_move[u], input);
      }
  }
}

/**
 * To reset the visited cell to zero
 */
const resetVisited = () => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            visited[i][j] = 0;
        }
    }
}

/**
 * Function that calculates largest connected colours/numbers on the grid
 */
const computeLargestConnectedGrid = (input) => {
  let current_max = Number.MIN_VALUE;

  for (let i = 0; i < n; i++)
    {
        for (let j = 0; j < m; j++)
        {
            resetVisited();
            count = 0;
 
            if (j + 1 < m) {
                BreadthFirstSearch(input[i][j], input[i][j + 1], i, j, input);
            }
 
            if (count >= current_max) {
                current_max = count;
            }
            resetVisited();
            count = 0;
 
            if (i + 1 < n) {
                BreadthFirstSearch(input[i][j], input[i + 1][j], i, j, input);
            }
 
            if (count >= current_max) {
                current_max = count;
            }
        }
    }
    console.log(current_max)
}

const input = [ [ 'Y', 'Y', 'G', 'B'],
                [ 'Y', 'G', 'B', 'G'],
                [ 'B', 'G', 'G', 'G' ], ];

computeLargestConnectedGrid(input)