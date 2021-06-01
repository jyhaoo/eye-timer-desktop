import React from 'react';
import Background from './components/Background/Background';
import Timer from './components/Timer/Timer';
import Settings from './components/Settings/Settings';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 10,
      finishMessage: 'Finished',
    }
    this.handleTime = this.handleTime.bind(this);
  }

  handleTime(newTime) {
    this.setState({ time: newTime });
  }

  render() {
    let time = this.state.time;
    let finishMessage = this.state.finishMessage;
    return (
      <div>
        <Background image='test'>
          <Settings handleTime={this.handleTime} />
          <Timer key={Date().toLocaleString()} time={time} finishMessage={finishMessage} />
        </Background>
      </div>
    )
  }
}

export default App;