import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Input = props => {
  const { id, option, name, moodChange } = props;
  return (
    <label htmlFor={id} title={id}>
      {name}
      <input
        type="radio"
        name="mood"
        id={id}
        option={option}
        onChange={moodChange}
      />
    </label>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  moodChange: PropTypes.func.isRequired,
};

export default Input;
