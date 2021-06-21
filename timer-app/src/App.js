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

  const openSettings = () => {
    setSettings(true);
  }

  const addSettings = (timerValue, settingsBackground) => {
    setSettings(false);
    if (timerValue === 'clock') {
      setClock(true)
    } else {
      setTimer(true)
      setTimerType((timerValue === '1hour') ? 3600 : 2700);
    }
    setBackground(settingsBackground);
  }

  return (
    <div>
      <Background image={background}>
        {settings &&
          (<SettingsModal onAddSettings={addSettings} onConfirm={settingsHandler} />)
        }
        {timer && <Time time={timerType} openSettings={openSettings} />}
        {clock && <Clock />}
      </Background>
    </div>
  );
}

export default App;