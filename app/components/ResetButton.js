import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { reset } from '../actions';

const ResetButton = ({ dispatch }) => (
  <button
    className="reset"
    onClick={() => dispatch(reset())}
  >
    Reset
  </button>
);

ResetButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const ResetContainer = connect()(ResetButton);

export default ResetContainer;
