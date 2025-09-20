import React from 'react';

/*
  ComponentC (Grand-child)
  - Proper way: receive the value from parents via props (valueC).
  - Incorrect ways (examples below) are commented — they will either show nothing
    or cause an error. See comments for exact results.
*/
const ComponentC = (props) => {
    return (
        <div>
            {/* Correct: access the count value that was passed down as valueC */}
            <h3>Count value from Component C : {props.valueC}</h3>
            <br />

            {/* -----------------------
         WRONG IDEA 1: Try to read a prop named "count" directly:
           - If you use props.count here, it will be undefined *if nobody passed it*.
           - Rendering {props.count} will not throw an exception; it simply renders nothing.
         Example (commented out to avoid confusion):
           <h1>Direct access attempt (props.count): ( {props.count} )</h1>
         What you will see:
           Direct access attempt (props.count): (  )
         — empty because props.count === undefined
      ------------------------ */}

            {/* -----------------------
         WRONG IDEA 2: Try to use the identifier `count` directly (not props.count):
           - Example: {count} in JSX (no "count" variable defined in this file).
           - This will cause a runtime/compile error:
             "ReferenceError: count is not defined" (or "count is not defined").
           - This is because JavaScript cannot find a variable named `count` in this scope.
         Example (commented out because it would break the app):
           <h1>Direct variable access (bad): {count}</h1>

         Expected console/browser error if you uncomment above:
           Uncaught ReferenceError: count is not defined
         or in dev build you may see a compile-time error like:
           'count' is not defined
      ------------------------ */}

            <h1 style={{ color: 'crimson' }}>
                {/* Explanation message for learners */}
                Note: You cannot directly use <code>count</code> here unless it is passed as a prop
                (props.count) or provided via Context. Direct use of an undeclared variable causes a ReferenceError.
            </h1>
        </div>
    );
};

export default ComponentC;
