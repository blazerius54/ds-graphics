import React from 'react';
import PropTypes from 'prop-types';

const dateFormat = date => {
  const fullDate = new Date(date);
  return `${fullDate.getDate()}.${fullDate.getMonth() +
    1}.${fullDate.getFullYear()}`;
};

const TimeWrapper = ({ firstDate, lastDate }) => (
  <div>
    <p>From {dateFormat(firstDate)}.</p>
    {lastDate && <p>To: {dateFormat(lastDate)}.</p>}
  </div>
);

TimeWrapper.propTypes = {
  firstDate: PropTypes.string.isRequired,
  lastDate: PropTypes.string,
};

export default TimeWrapper;
