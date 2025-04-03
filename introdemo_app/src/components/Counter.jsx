import { useState } from "react";

function Counter() {
    const [count, setCount]=setState(0);

    return (
        <div>
            <p> You clicked {count} times</p>
            <button onClick={()=> setCount( + 1)}>
                Click me!
            </button>
        </div>
    );
}

export default Counter;