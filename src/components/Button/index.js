import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = props => {
  const { handleSaveButton } = props;
  return (
    <label htmlFor="save" title="save">
      <input type="button" id="save" value="Save" onClick={handleSaveButton} />{' '}
    </label>
  );
};

Button.propTypes = {
  handleSaveButton: PropTypes.func.isRequired,
};

export default Button;
