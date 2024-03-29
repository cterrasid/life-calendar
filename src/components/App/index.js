import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import moment from 'moment';
import Calendar from '../Calendar';
import Editor from '../Editor';
import Detail from '../Detail';
import './styles.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      editor: {
        mood: ':)',
        date: '',
        message: '',
      },
      moodCollector: JSON.parse(localStorage.getItem('userMood')) || [],
    };

    this.handleMoodInput = this.handleMoodInput.bind(this);
    this.handleDateInput = this.handleDateInput.bind(this);
    this.handleMessageInput = this.handleMessageInput.bind(this);
    this.handleSaveData = this.handleSaveData.bind(this);
    this.handleClearData = this.handleClearData.bind(this);
    this.getMoodDetail = this.getMoodDetail.bind(this);
  }

  getMoodDetail(id) {
    const { moodCollector } = this.state;
    return moodCollector.find(item => item.id === parseInt(id, 10));
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
    const { moodCollector, editor } = this.state;

    const newMoodCollector = moodCollector
      .concat(editor)
      .map((item, index) => {
        return { ...item, id: index + 1 };
      })
      .sort((a, b) => moment(a.date, 'YYYYMMDD') - moment(b.date, 'YYYYMMDD'));

    this.setState(
      {
        moodCollector: newMoodCollector,
      },
      () => localStorage.setItem('userMood', JSON.stringify(moodCollector)),
    );
  }

  handleClearData() {
    this.setState({
      editor: {
        mood: ':)',
        date: '',
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
          <Route
            path="/detail/:id"
            render={routerProps => (
              <Detail
                detail={this.getMoodDetail(routerProps.match.params.id)}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
