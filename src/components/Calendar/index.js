import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import './styles.scss';

const Calendar = props => {
  const { moodCollector, handleClearData } = props;
  return (
    <div className="calendar__container">
      <Link to="/editor" className="calendar__edit">
        <Button
          value="+"
          className="calendar__edit-button"
          handleData={handleClearData}
        />
      </Link>
      <section className="calendar__days">
        <ul>
          {moodCollector.map(day => (
            <li key={day.date} className="calendar__day">
              <p className="calendar__day-mood">{day.mood}</p>
              <p className="calendar__day-date">{day.date}</p>
              <p className="calendar__day-message">{day.message}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

Calendar.propTypes = {
  moodCollector: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClearData: PropTypes.func.isRequired,
};

export default Calendar;
