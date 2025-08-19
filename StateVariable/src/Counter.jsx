import React, { useState } from 'react'

// creating a functional conponent
function Counter() {

    // by traditional method
    let num = 0;
    function count() {
        num += 1;
        console.log(`Count = ${num}`);
    }

    // creating a state variable method
    const [age, setAge] = useState(0);
    return (
        <div>
            <h2>Counter App</h2>
            <br />
            <h3>Count : {num}</h3>
            <button onClick={count} > IncreaseTraditionally </button>

            <br />
            <h3>Age by useState : {age}</h3>
            <button onClick={() => setAge(age + 1)}> Increase by useState </button>
        </div>
    )
}

export default Counter;