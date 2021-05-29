
import Background from './components/Background/Background';

const App = () => {
  return (
    <div>
      <Background >
        <div style={{ position: 'absolute', color: 'white', top: 8, left: '50%', transform: 'translateX(-50%)' }} >Your text</div>
        <h2>Hello world!</h2>
      </Background>
    </div>
  )
}

export default App;