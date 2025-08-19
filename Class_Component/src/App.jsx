import React from 'react';
import Faculty from './classComponent/Faculty';
import Student from './classComponent/Student';


const App = () => {
  return (
    <>
      <h1>App</h1>
      <Faculty />
      <Student name="Aryan Raj" age='23' />
      
    </>
  )
}

export default App;