import React from 'react';
import PropTypes from 'prop-types';
import InputMood from '../InputMood';
import './styles.scss';

const Form = props => {
  const { mood, handleDataInput } = props;

  return (
    <form className="form__container">
      <label htmlFor="date" title="date">
        Date
        <input type="date" id="date" name="date" onChange={handleDataInput} />
      </label>
      <div className="mood__selector">
        <p>Mood</p>
        <InputMood
          id="happy"
          name=":)"
          value="1"
          mood={mood}
          checked={{ mood } === '1'}
          handleDataInput={handleDataInput}
        />
        <InputMood
          id="sad"
          name=":("
          value="2"
          mood={mood}
          checked={{ mood } === '2'}
          handleDataInput={handleDataInput}
        />
      </div>
      {mood === '1' ? (
        <label htmlFor="message" title="message">
          <textarea
            id="message"
            name="message"
            rows="2"
            cols="20"
            placeholder="Why are you happy today?"
            onChange={handleDataInput}
          />
        </label>
      ) : null}
      <label htmlFor="submit" title="submit">
        <input type="submit" id="submit" value="Save" />
      </label>
      <label htmlFor="reset" title="reset">
        <input type="reset" id="reset" value="Cancel" />
      </label>
    </form>
  );
};

Form.propTypes = {
  mood: PropTypes.string.isRequired,
  handleDataInput: PropTypes.func.isRequired,
};

export default Form;
