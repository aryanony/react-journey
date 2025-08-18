import react from 'react';

//importing multi function from single jsx file
import { FacultyName, FacultyQualification } from './components/Faculty';

import { CourseName, CourseDuration, CoursePrice } from './components/Course';


const App = () => {
  return (
    <>
      <h1>App</h1>
      <div>
        <FacultyName />
        <FacultyQualification />
      </div>
      <div>
        <CourseName />
        <CourseDuration />
        <CoursePrice />
      </div>
    </>
  )
}

export default App;