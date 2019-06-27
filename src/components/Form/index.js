import React from 'react';
import './styles.scss';

const Form = () => {
  return (
    <form className="form__container">
      <label htmlFor="date" title="date">
        Date
        <input type="date" id="date" name="date" />
      </label>
      <div className="mood__selector">
        <p>Mood</p>
        <label htmlFor="mood1" title="happy">
          :)
          <input type="checkbox" id="mood1" name="mood" value=":)" />
        </label>
        <label htmlFor="mood2" title="sad">
          :(
          <input type="checkbox" id="mood2" name="mood" value=":(" />
        </label>
      </div>
      <label htmlFor="message" title="message">
        Message:
        <textarea
          id="message"
          name="message"
          rows="8"
          cols="20"
          placeholder="What is your mood today?"
        />
      </label>
      <label htmlFor="submit" title="submit">
        <input type="submit" id="submit" value="Save" />
      </label>
      <label htmlFor="reset" title="reset">
        <input type="reset" id="reset" value="Cancel" />
      </label>
    </form>
  );
};

export default Form;
