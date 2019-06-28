import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Input = props => {
  const { id, value, mood, moodChange } = props;
  return (
    <label htmlFor={id} title="happy">
      :)
      <input
        type="radio"
        name="mood"
        id={id}
        value={value}
        checked={{ mood } === { value }}
        onChange={moodChange}
      />
    </label>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  mood: PropTypes.string.isRequired,
  moodChange: PropTypes.func.isRequired,
};

export default Input;
