import React from 'react';
import Student from './Student';


function App() {
  return (
    <div>
      <h1>App Component</h1>
      <Student stdname="Aryan Gupta" age={23} course="MCA" />
      <br />
      <Student stdname="Ashish Kumar" age={26} course="MCA" />

    </div>
  )

}

export default App;
