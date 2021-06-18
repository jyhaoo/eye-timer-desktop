import React, { useState } from 'react';
import Background from './components/Background';
import SettingsModal from './components/SettingsModal';
import Time from './components/Time';

function App() {
  const [settings, setSettings] = useState(true)
  const [background, setBackground] = useState('default')
  const [timerType, setTimerType] = useState('')

  const settingsHandler = () => {
    setSettings(null);
  }

  const addSettings = (timerValue, settingsBackground) => {
    setTimerType(timerValue);
    setBackground(settingsBackground);
  }

  return (
    <div>
      <Background image={background}>
        {settings &&
          (<SettingsModal onAddSettings={addSettings} onConfirm={settingsHandler} />)
        }
        <Time time={timerType} />
      </Background>
    </div>
  );
}

export default App;