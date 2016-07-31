import React, { PropTypes } from 'react';

const Cell = ({ onClick, value, winner }) => (
  <div
    onClick={onClick}
    className={`cell ${value || 'free'} ${winner ? 'won' : ''}`}
  >
  </div>
);

Cell.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
  winner: PropTypes.bool,
};

export default Cell;
