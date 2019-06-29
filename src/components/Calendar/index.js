import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Calendar = () => {
  return (
    <div className="calendar__container">
      <Link to="/editor" className="calendar__edit">
        +
      </Link>
      <section className="calendar__days">Aqui van las caritas</section>
    </div>
  );
};

export default Calendar;
