import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const InputDate = props => {
  const { handleDateInput } = props;

  return (
    <label htmlFor="date" title="date">
      <input type="date" id="date" name="date" onChange={handleDateInput} />
    </label>
  );
};

InputDate.propTypes = {
  handleDateInput: PropTypes.func.isRequired,
};

export default InputDate;
