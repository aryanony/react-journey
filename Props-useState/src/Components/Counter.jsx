import React, { useState } from 'react';
import Button from './Button';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h2>Counter App</h2>
            <h3>Count is: {count}</h3>
            <br /> <br />
            <button onClick={() => { setCount(count + 1) }}>+</button>

            <br /> <br />
            <Button name="Increase +" onClick={() => { setCount(count + 1) }} />
            <Button onClick={() => { setCount(0) }} name="Reset 0" />
            <Button name="Decrease -" onClick={() => { setCount(count - 1) }} />
        </>
    )
}

export default Counter;