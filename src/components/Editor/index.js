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
    message,
    handleDateInput,
    handleMoodInput,
    handleMessageInput,
    handleSaveData,
    handleClearData,
  } = props;

  return (
    <form className="editor__container">
      <div className="editor__date">
        <p className="editor__title">Date:</p>
        <InputDate handleDateInput={handleDateInput} />
      </div>
      <div className="editor__mood">
        <p className="editor__title">Mood:</p>
        <div className="editor__moods">
          <InputMood
            id="happy"
            name=":)"
            value=":)"
            mood={mood}
            handleMoodInput={handleMoodInput}
          />
          <InputMood
            id="sad"
            name=":("
            value=":("
            mood={mood}
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
          <Button
            className="button editor__buttons-save"
            value="Save"
            handleData={handleSaveData}
          />
        </Link>
        <Link to="/">
          <Button
            className="button editor__buttons-cancel"
            value="Cancel"
            handleData={handleClearData}
          />
        </Link>
      </div>
    </form>
  );
};

Editor.propTypes = {
  mood: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  handleDateInput: PropTypes.func.isRequired,
  handleMoodInput: PropTypes.func.isRequired,
  handleMessageInput: PropTypes.func.isRequired,
  handleSaveData: PropTypes.func.isRequired,
  handleClearData: PropTypes.func.isRequired,
};

export default Editor;
