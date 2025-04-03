import { useState } from 'react';
import Greetings from './components/Greetings.jsx';
import Counter from './components/Counter.jsx';
import './App.css';

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  return (
    <div className='card'>
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Greetings/>
      <Counter/>
    </div>
    </div>
  )
}

export default App