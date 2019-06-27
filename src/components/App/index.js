import React from 'react';
import Form from '../Form';
import Calendar from '../Calendar';
import './styles.scss';

const App = () => {
  return (
    <div className="app__container">
      <Form />
      <Calendar />
    </div>
  );
};

export default App;
