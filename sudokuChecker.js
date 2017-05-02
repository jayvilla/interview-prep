const sudokuChecker = board => {
  const rowCheck = (rowIndex, validRows) => {
    for (let number of board[rowIndex]) {
      if (!validRows[number]) return false;
      validRows[number] --;
    }
    return true;
  }

 const columnCheck = (colIndex, validRows) => {
    let current;
    for (let i = 0; i < board.length; i ++) {
      current = board[i][colIndex];
      if (!validRows[current]) return false;
      validRows[current] --;
    }
    return true;
  }

 const boxCheck = (x, y, validRows) => {
    let current;
    for (let i = 0; i < 3; i ++) {
      for (let j = 0; j < 3; j ++) {
        current = board[x + i][y + j];
        if (!validRows[current]) return false;
        validRows[current] --;
      }
    }
    return true;
  }

 const resetMoves = (obj) => {
    return {
    '1': 1,
    '2': 1,
    '3': 1,
    '4': 1,
    '5': 1,
    '6': 1,
    '7': 1,
    '8': 1,
    '9': 1
    };
  }

 for (let i = 0; i < board.length; i ++) {
    if (!rowCheck(i, resetMoves())) return false;
    if (!columnCheck(i, resetMoves())) return false;
  }

 for (i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      if (!boxCheck(i, j, resetMoves())) return false;
    }
  }
  return true;
}

let board = [
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
console.log(sudokuChecker(board))
