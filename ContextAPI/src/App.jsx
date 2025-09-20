import React from "react";
import ComponentA from "./components/ComponentA";
import { DataContext } from "./context/context"; // import context

const App = () => {
  // Step 3: Create a value in App (grandparent)
  const appVal = 10;

  return (
    <>
      {/* 
        Step 4: Wrap children with <DataContext.Provider>
        - This makes the value available to all child components
        - Any component inside Provider can use this value
      */}
      <DataContext.Provider value={appVal}>
        <h1>App Component</h1>

        {/* ❌ Wrong way: we cannot directly use {DataContext}, 
            because it is just an object, not the value.
            We must use useContext in child components */}
        <h3>Trying direct: {DataContext}</h3>

        <br />
        <h2>Component A : </h2>
        <ComponentA />
      </DataContext.Provider>
    </>
  );
};

export default App;
