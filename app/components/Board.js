import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { markCell } from '../actions';
import Cell from './Cell';

const Board = ({ board, winline, gameOver, onCellClick }) => {
  const cells = board.map((value, index) => (
    <Cell
      key={index}
      value={value}
      winner={winline.includes(index)}
      onClick={() => onCellClick(index, gameOver)}
    />
  ));
  return (
    <div className="board">
      {cells}
    </div>
  );
};

Board.propTypes = {
  board: PropTypes.array.isRequired,
  winline: PropTypes.array.isRequired,
  gameOver: PropTypes.bool.isRequired,
  onCellClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  board: state.board,
  winline: state.winline,
  gameOver: state.gameOver,
});

const mapDispatchToProps = (dispatch) => ({
  onCellClick: (index, gameOver) => (
    gameOver ? null : dispatch(markCell(index))
  ),
});

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default BoardContainer;
