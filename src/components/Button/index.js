import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = props => {
  const { value, handleSaveData } = props;
  return (
    <button id={value} name={value} type="button" onClick={handleSaveData}>
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleSaveData: PropTypes.func.isRequired,
};

export default Button;
