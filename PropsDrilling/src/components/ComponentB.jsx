import React from 'react';
import ComponentC from './ComponentC';

/*
  ComponentB (Grand-child intermediary)
  - Receives valueB from ComponentA.
  - Forwards it to ComponentC using prop "valueC".
  - This is called "prop drilling" — passing props down multiple levels.
*/
const ComponentB = (props) => {
    return (
        <div>
            <h3>Count value from Component B : {props.valueB}</h3>
            <br />
            <ComponentC valueC={props.valueB} />
        </div>
    );
};

export default ComponentB;
