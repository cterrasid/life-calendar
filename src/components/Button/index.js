import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = props => {
  const { handleSaveData } = props;
  return (
    <label htmlFor="save" title="save">
      <input type="button" id="save" value="Save" onClick={handleSaveData} />{' '}
    </label>
  );
};

Button.propTypes = {
  handleSaveData: PropTypes.func.isRequired,
};

export default Button;
