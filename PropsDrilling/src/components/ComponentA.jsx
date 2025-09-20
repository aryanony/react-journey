import React from 'react';
import ComponentB from './ComponentB';

/*
  ComponentA (Child of App)
  - Receives valueA prop from App (the count).
  - It cannot magically read App.count by itself.
  - It passes the value further down to ComponentB via prop "valueB".
*/
const ComponentA = (props) => {
    return (
        <div>
            {/* Show value received from App */}
            <h3>Count value from Component A : {props.valueA}</h3>
            <br />

            {/* Pass the same value down to ComponentB */}
            <ComponentB valueB={props.valueA} />
        </div>
    );
};

export default ComponentA;
