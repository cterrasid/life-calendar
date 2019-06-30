import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

const Calendar = props => {
  const { moodCollector } = props;
  return (
    <div className="calendar__container">
      <Link to="/editor" className="calendar__edit">
        +
      </Link>
      <section className="calendar__days">
        <ul>
          {moodCollector.map(day => (
            <li key={day.date}>
              <p className="prueba">{day.mood}</p>
              <p>{day.date}</p>
              <p>{day.message}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

Calendar.propTypes = {
  moodCollector: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Calendar;
