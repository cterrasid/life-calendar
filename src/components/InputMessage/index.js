import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const InputMessage = props => {
  const { message, handleMessageInput } = props;
  return (
    <label htmlFor="message" title="message">
      <textarea
        id="message"
        name="message"
        className="message__box"
        rows="2"
        cols="20"
        placeholder="Why are you happy today?"
        value={message}
        onChange={handleMessageInput}
      />
    </label>
  );
};

InputMessage.propTypes = {
  message: PropTypes.string.isRequired,
  handleMessageInput: PropTypes.func.isRequired,
};

export default InputMessage;
