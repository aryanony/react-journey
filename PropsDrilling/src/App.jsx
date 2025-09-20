import React, { useState } from 'react';
import ComponentA from './components/ComponentA';

/*
  App component (Grand-parent)
  - It holds the "count" state.
  - It passes the count down to ComponentA via prop "valueA".
  - This is the only correct way (without context) to share state with children:
      -> pass props down the tree (prop drilling).
*/
const App = () => {
  // create a state variable "count" with initial value 0
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Heading */}
      <h2>App Counter Button :</h2>
      <br />

      {/* Button that updates the App's state */}
      {/* onClick calls setCount to increase the value by 1 */}
      <button onClick={() => { setCount(count + 1); }}>
        <h2> + 1 : {count}</h2>
      </button>

      <h2>Child Components :</h2>

      {/* Pass count down to ComponentA via prop named "valueA" */}
      <ComponentA valueA={count} />
    </>
  );
};

export default App;
