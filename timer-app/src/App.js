import React, { useState } from 'react';
import Background from './components/Background';
import SettingsModal from './components/SettingsModal';
import Time from './components/Time';
import Clock from './components/Clock';

function App() {
  const [settings, setSettings] = useState(true)
  const [timer, setTimer] = useState(false)
  const [clock, setClock] = useState(false)

  const [background, setBackground] = useState('default')
  const [timerType, setTimerType] = useState('')

  const settingsHandler = () => {
    setSettings(null);
  }

  const addSettings = (timerValue, settingsBackground) => {
    setSettings(false);
    if (timerValue === 'clock') {
      setClock(true)
    }
    setTimerType(timerValue);
    setBackground(settingsBackground);
  }

  return (
    <div>
      <Background image={background}>
        {settings &&
          (<SettingsModal onAddSettings={addSettings} onConfirm={settingsHandler} />)
        }
        {timer && <Time time={timerType} />}
        {clock && <Clock />}
      </Background>
    </div>
  );
}

export default App;