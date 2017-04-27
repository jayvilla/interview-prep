// I - 9x9 board
// O - boolean
// C - ???
// E - ???

let example = [
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
];

// ['.',4,'.', ]
// Check horizontals for duplicates
// Check verticals for duplicates

const sudokuChecker = board => {
  let horiz = [], vert = [];

  for (let i = 0; i < board.length; i++) {
    horiz = [];
    vert = [];

    for (let j = 0; j < board.length; j++) {
      if (horiz.includes(board[i][j]) || vert.includes(board[j][i])) {
        return false;
      }

      vert.push(board[j][i]);
      horiz.push(board[i][j]);
    }
  }

  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      /* Insert code here */
    }
  }
  return true;
};

console.log(sudokuChecker(example));

