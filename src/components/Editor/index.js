import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import InputMood from '../InputMood';
import InputMessage from '../InputMessage';
import './styles.scss';

const Editor = props => {
  const {
    mood,
    handleDateInput,
    handleMoodInput,
    handleMessageInput,
    handleSaveButton,
  } = props;

  return (
    <form className="form__container">
      <label htmlFor="date" title="date">
        Date
        <input type="date" id="date" name="date" onChange={handleDateInput} />
      </label>
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
        <InputMessage handleMessageInput={handleMessageInput} />
      ) : null}
      <Link to="/">
        <label htmlFor="save" title="save">
          <input
            type="button"
            id="save"
            value="Save"
            onClick={handleSaveButton}
          />
        </label>
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
  handleDateInput: PropTypes.func.isRequired,
  handleMoodInput: PropTypes.func.isRequired,
  handleMessageInput: PropTypes.func.isRequired,
  handleSaveButton: PropTypes.func.isRequired,
};

export default Editor;
