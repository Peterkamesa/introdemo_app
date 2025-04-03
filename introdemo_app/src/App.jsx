import { useState } from 'react';
import Greetings from './components/Greetings.jsx';

import Counter from './components/Counter.jsx';

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>

      <Greetings/>

      <Counter/>

    </div>

  )
}

export default App