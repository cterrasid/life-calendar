import React, { PureComponent } from 'react';
import Form from '../Form';
import Calendar from '../Calendar';
import './styles.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      mood: '1',
      date: 'dd/mm/aaaa',
      message: '',
    };

    this.handleDataInput = this.handleDataInput.bind(this);
  }

  handleDataInput(e) {
    const { value } = e.target;

    this.setState({
      mood: value,
      date: value,
      message: value,
    });
  }

  render() {
    const { mood, date, message } = this.state;
    return (
      <div className="app__container">
        <Calendar />
        <Form
          mood={mood}
          date={date}
          message={message}
          handleDataInput={this.handleDataInput}
        />
      </div>
    );
  }
}

export default App;
