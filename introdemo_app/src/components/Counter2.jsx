import { useState } from "react";

const Counter2 = ({ counter, setCounter }) => { // Receive props from App
    const handleClick = () => {
      console.log('clicked');
      setCounter(counter + 1); // Now using the prop function
    }

    return (
      <div>
        <button onClick={() => setCounter(counter + 1)}>
          plus
        </button>
        <button onClick={() => setCounter(0)}> 
          zero
        </button>
      </div>
    );
}

export default Counter2;