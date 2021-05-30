import React from 'react';
import Background from './components/Background/Background';
import Timer from './components/Timer/Timer';
import Settings from './components/Settings/Settings';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 10
    }
  }
  render() {
    return (
      <div>
        <Background image='test'>
          <Settings />
          <Timer time='10:00' />
        </Background>
      </div>
    )
  }
}

export default App;