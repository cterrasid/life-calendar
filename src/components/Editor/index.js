import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import InputMood from '../InputMood';
import InputDate from '../InputDate';
import InputMessage from '../InputMessage';
import Button from '../Button';
import './styles.scss';

const Editor = props => {
  const {
    mood,
    date,
    message,
    handleDateInput,
    handleMoodInput,
    handleMessageInput,
    handleSaveData,
  } = props;

  return (
    <form className="form__container">
      <InputDate date={date} handleDateInput={handleDateInput} />
      <div className="mood__selector">
        <p>Mood</p>
        <InputMood
          id="happy"
          name=":)"
          value="1"
          checked="1"
          handleMoodInput={handleMoodInput}
        />
        <InputMood
          id="sad"
          name=":("
          value="2"
          checked="2"
          handleMoodInput={handleMoodInput}
        />
      </div>
      {mood === '1' ? (
        <InputMessage
          message={message}
          handleMessageInput={handleMessageInput}
        />
      ) : null}
      <Link to="/">
        <Button handleSaveData={handleSaveData} />
      </Link>
      <Link to="/">
        <label htmlFor="cancel" title="cancel">
          <input type="button" id="cancel" value="Cancel" />
        </label>
      </Link>
    </form>
  );
};

Editor.propTypes = {
  mood: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  handleDateInput: PropTypes.func.isRequired,
  handleMoodInput: PropTypes.func.isRequired,
  handleMessageInput: PropTypes.func.isRequired,
  handleSaveData: PropTypes.func.isRequired,
};

export default Editor;
