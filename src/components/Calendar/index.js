import React from 'react';
import './styles.scss';

const Calendar = () => {
  return (
    <div className="calendar__container">
      <button className="calendar__edit" type="button">
        +
      </button>
      <section className="calendar__days">Aqui van las caritas</section>
    </div>
  );
};

export default Calendar;
