import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import Calendar from '../Calendar';
import Editor from '../Editor';
import './styles.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      editor: {
        mood: ':)',
        date: 'dd/mm/aaaa',
        message: '',
      },
      moodCollector: [],
    };

    this.handleMoodInput = this.handleMoodInput.bind(this);
    this.handleDateInput = this.handleDateInput.bind(this);
    this.handleMessageInput = this.handleMessageInput.bind(this);
    this.handleSaveData = this.handleSaveData.bind(this);
    this.handleClearData = this.handleClearData.bind(this);
  }

  componentDidMount() {
    if (localStorage.userMood) {
      const userMoodLS = JSON.parse(localStorage.getItem('userMood'));
      this.setState({
        moodCollector: userMoodLS,
      });
    }
  }

  handleMoodInput(e) {
    const { value } = e.target;

    this.setState(state => {
      return {
        editor: {
          ...state.editor,
          mood: value,
        },
      };
    });
  }

  handleDateInput(e) {
    const { value } = e.target;

    this.setState(state => {
      return {
        editor: {
          ...state.editor,
          date: value,
        },
      };
    });
  }

  handleMessageInput(e) {
    const { value } = e.target;

    this.setState(state => {
      return {
        editor: {
          ...state.editor,
          message: value,
        },
      };
    });
  }

  handleSaveData() {
    const { moodCollector } = this.state;
    this.setState(
      state => {
        return {
          moodCollector: state.moodCollector.concat(state.editor),
        };
      },
      () => localStorage.setItem('userMood', JSON.stringify(moodCollector)),
    );
  }

  handleClearData() {
    this.setState({
      editor: {
        mood: ':)',
        date: 'dd/mm/aaaa',
        message: '',
      },
    });
  }

  render() {
    const { editor, moodCollector } = this.state;

    return (
      <div className="app__container">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Calendar
                moodCollector={moodCollector}
                handleClearData={this.handleClearData}
              />
            )}
          />
          <Route
            path="/editor"
            render={routerProps => (
              <Editor
                match={routerProps.match}
                mood={editor.mood}
                message={editor.message}
                date={editor.date}
                handleDateInput={this.handleDateInput}
                handleMoodInput={this.handleMoodInput}
                handleMessageInput={this.handleMessageInput}
                handleSaveData={this.handleSaveData}
                handleClearData={this.handleClearData}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
