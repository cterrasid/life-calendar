import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const InputMessage = props => {
  const { handleMessageInput } = props;
  return (
    <label htmlFor="message" title="message">
      <textarea
        id="message"
        name="message"
        rows="2"
        cols="20"
        placeholder="Why are you happy today?"
        onChange={handleMessageInput}
      />
    </label>
  );
};

InputMessage.propTypes = {
  handleMessageInput: PropTypes.func.isRequired,
};

export default InputMessage;
