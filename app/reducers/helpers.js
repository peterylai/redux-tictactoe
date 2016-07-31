function getMarker(turn) {
  return turn % 2 === 0 ? 'X' : 'O';
}

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function findWinner(board) {
  const winline = winningLines.find((line) => (
    board[line[0]] !== null
    && board[line[0]] === board[line[1]]
    && board[line[1]] === board[line[2]]
  ));

  return winline || [];
}

export { findWinner, getMarker };
