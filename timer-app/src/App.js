import React, { useState } from 'react';
import Background from './components/Background';

function App() {
  const [settings, setSettings] = useState()
  const [background, setBackground] = useState('does not exist')

  return (
    <Background image={background}>
    </Background>

  );
}

export default App;