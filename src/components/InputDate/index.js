import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const InputDate = props => {
  const { date, handleDateInput } = props;

  return (
    <label htmlFor="date" title="date">
      Date
      <input
        type="date"
        id="date"
        name="date"
        value={date}
        onChange={handleDateInput}
      />
    </label>
  );
};

InputDate.propTypes = {
  handleDateInput: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
};

export default InputDate;
