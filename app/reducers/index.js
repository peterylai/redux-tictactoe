import { getMarker, findWinner } from './helpers';

const initialState = {
  board: new Array(9).fill(null),
  turn: 1,
  winline: [],
  gameOver: false,
};

function tttApp(state = initialState, action) {
  switch (action.type) {
    case 'MARK_CELL': {
      if (state.board[action.index] !== null) {
        return state;
      }
      const newBoard = state.board.map((cell, i) => (
        action.index === i ? getMarker(state.turn) : cell
      ));
      const winline = findWinner(newBoard);
      return (
        Object.assign({}, {
          board: newBoard,
          turn: state.turn + 1,
          winline,
          gameOver: winline.length > 0 || state.turn === 9,
        })
      );
    }
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export default tttApp;
