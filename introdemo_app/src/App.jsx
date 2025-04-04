import { useState } from 'react';
import Greetings from './components/Greetings.jsx';
import Counter from './components/Counter.jsx';
import './App.css';
import Friends from './components/Friends.jsx';
import Hello from './components/Hello.jsx';
import Counter2 from './components/Counter2.jsx';

const App = () => {
  const [appCounter, setAppCounter] = useState(0); // State lifted to App

  return (
    <div className='card'>
      <div>
        <p>App Counter: {appCounter}</p>
        <Greetings/>
        <Counter/>
        <Counter2 
          counter={appCounter} 
          setCounter={setAppCounter} 
        />
        <Friends/>
        <Hello/>
      </div>
    </div>
  )
}

export default App;