import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

const Calendar = props => {
  const { mood, date, message } = props;
  return (
    <div className="calendar__container">
      <Link to="/editor" className="calendar__edit">
        +
      </Link>
      <section className="calendar__days">
        <ul>
          {/* RECUERDA GENERAR UN ARRAY PARA QUE AQUI ITERE */}
          <li>
            <p>{mood}</p>
            <p>{date}</p>
            <p>{message}</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

Calendar.propTypes = {
  mood: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Calendar;
