import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = props => {
  const { value } = props;
  return (
    <button id={value} name={value} type="button">
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Button;
