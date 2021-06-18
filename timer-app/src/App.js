import React, { useState } from 'react';
import Background from './components/Background';
import SettingsModal from './components/SettingsModal';
import Time from './components/Time';

function App() {
  const [settings, setSettings] = useState(true)
  const [background, setBackground] = useState('default')

  const settingsHandler = () => {
    setSettings(null);
  }

  const addSettings = (settingsBackground) => {
    setBackground(settingsBackground);
  }

  return (
    <div>
      <Background image={background}>
        {settings &&
          (<SettingsModal onAddSettings={addSettings} onConfirm={settingsHandler} />)
        }
        <Time time={50} />
      </Background>
    </div>
  );
}

export default App;