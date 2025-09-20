import React from "react";
import ComponentC from "./ComponentC";

// Step 6: Another component in the middle
// Still does not need props or context
const ComponentB = () => {
    return (
        <div>
            <h1>Component B</h1>
            <br />
            <h2>Component C : </h2>
            <ComponentC />
        </div>
    );
};

export default ComponentB;
