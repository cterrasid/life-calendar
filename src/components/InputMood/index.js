import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const InputMood = props => {
  const { id, value, name, handleDataInput } = props;

  return (
    <label htmlFor={id} title={id}>
      {name}
      <input
        type="radio"
        name="mood"
        id={id}
        value={value}
        onChange={handleDataInput}
      />
    </label>
  );
};

InputMood.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleDataInput: PropTypes.func.isRequired,
};

export default InputMood;