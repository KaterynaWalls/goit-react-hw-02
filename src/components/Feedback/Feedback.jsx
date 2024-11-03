/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';


const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => {
  return (
    <div>
      <ul>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {totalFeedback} </li>
        <li>Positive: {positiveFeedbackPercentage}%</li>
      </ul>
    </div>
  );
};
Feedback.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};
export default Feedback;
