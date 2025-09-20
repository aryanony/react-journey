import React from "react";
import ComponentB from "./ComponentB";

// Step 5: Normal component - does not use context directly
const ComponentA = () => {
    return (
        <div>
            <h1>Component A</h1>
            <br />
            <h2>Component B : </h2>
            <ComponentB />
        </div>
    );
};

export default ComponentA;
