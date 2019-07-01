import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = props => {
  const { value, handleData, className } = props;
  return (
    <button
      className={className}
      id={value}
      name={value}
      type="button"
      onClick={handleData}
    >
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  handleData: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
