import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import happy from '../../images/happy.png';
import sad from '../../images/sad.png';
import './styles.scss';

const Calendar = props => {
  const { moodCollector, handleClearData } = props;

  return (
    <div className="calendar__container">
      <Link to="/editor" className="calendar__edit">
        <Button
          value="+"
          className="button calendar__edit-button"
          handleData={handleClearData}
        />
      </Link>
      <div className="calendar__days-wrapper">
        <ul className="calendar__days">
          {moodCollector.map(day => (
            <li key={`${day.id} ${day.date}`} className="calendar__day">
              <Link to="/detail/:id">
                <img
                  className="calendar__day-mood"
                  src={day.mood === ':)' ? happy : sad}
                  alt={day.mood}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Calendar.propTypes = {
  moodCollector: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClearData: PropTypes.func.isRequired,
};

export default Calendar;
