import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const InputMood = props => {
  const { mood, id, value, name, handleMoodInput } = props;

  return (
    <label htmlFor={id} title={id}>
      <input
        className="mood"
        id={id}
        value={value}
        name="mood"
        type="radio"
        checked={mood.includes(value)}
        onChange={handleMoodInput}
      />
      {name}
    </label>
  );
};

InputMood.propTypes = {
  mood: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleMoodInput: PropTypes.func.isRequired,
};

export default InputMood;
