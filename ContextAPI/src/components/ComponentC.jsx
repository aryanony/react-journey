import React, { useContext } from "react";
import { DataContext } from "../context/context";

// Step 7: Finally, a child component wants data from App
const ComponentC = () => {
    // ✅ Correct way: useContext to get the value from nearest Provider
    const dataC = useContext(DataContext);

    return (
        <div>
            <h1>Component C</h1>

            {/* ❌ Wrong way: directly writing {DataContext} will only print "[object Object]" */}
            <h2>
                Wrong direct usage: Data of App component from Context : '{DataContext}' in grand child.
            </h2>

            {/* ✅ Correct way: using useContext hook */}
            <h3>
                Correct usage → Another way, store App component data in a variable in super child component from: context data '{dataC}' in grand Child.
            </h3>
        </div>
    );
};

export default ComponentC;
