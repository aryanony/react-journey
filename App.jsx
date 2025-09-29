import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import StudentRegistration from './StudentRegistration.jsx'
import StudentList from './StudentList.jsx'
import Navigation from './Navigation.jsx'


function App() {
  return (
    <>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<StudentRegistration />} />
            <Route path="/studentlist" element={<StudentList />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
