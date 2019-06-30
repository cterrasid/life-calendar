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
    <form className="editor__container">
      <div className="editor__date">
        <p>Date:</p>
        <InputDate date={date} handleDateInput={handleDateInput} />
      </div>
      <div className="editor__mood">
        <p>Mood:</p>
        <div className="editor__moods">
          <InputMood
            id="happy"
            name=":)"
            value=":)"
            checked=":)"
            handleMoodInput={handleMoodInput}
          />
          <InputMood
            id="sad"
            name=":("
            value=":("
            checked=":("
            handleMoodInput={handleMoodInput}
          />
        </div>
      </div>
      {mood === ':)' ? (
        <InputMessage
          message={message}
          handleMessageInput={handleMessageInput}
        />
      ) : null}
      <div className="editor__buttons">
        <Link to="/">
          <Button value="Save" onClick={handleSaveData} />
        </Link>
        <Link to="/">
          <Button value="Cancel" />
        </Link>
      </div>
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
