import React, { useState } from 'react';
import Background from './components/Background';
import SettingsModal from './components/SettingsModal';

function App() {
  const [settings, setSettings] = useState(true)
  const [background, setBackground] = useState('does not exist')

  const settingsHandler = () => {
    setSettings(null);
  }

  return (
    <div>
      <Background image={background}>
        {settings &&
          (<SettingsModal onConfirm={settingsHandler} />)
        }
      </Background>
    </div>
  );
}

export default App;