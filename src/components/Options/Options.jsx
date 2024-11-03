import React from 'react';
import PropTypes from 'prop-types';


const Options = ({
  updateFeedback,
  feedback,
  totalFeedback,
  resetFeedback,
}) => {
  return (
    <div>
      {Object.keys(feedback).map(option => (
        <button key={option} onClick={() => updateFeedback(option)}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

Options.propTypes = {
  updateFeedback: PropTypes.func.isRequired,
  feedback: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }).isRequired,
  totalFeedback: PropTypes.number.isRequired,
  resetFeedback: PropTypes.func.isRequired,
};

export default Options;
