import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import FacultyRegistration from './components/FacultyRegistration';
import FacultyList from './components/FacultyList';
import FacultyUpdation from './components/FacultyUpdation';
import FacultyDeletion from './components/FacultyDeletion';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        

        {/* Navigation Menu */}
        <nav>
          <h3>
          <Link to="/facultyregistration">Faculty Registration</Link> |{" "}
          <Link to="/facultylist">Faculty List</Link> |{" "}
          <Link to="/facultyupdate">Faculty Updation</Link> |{" "}
          <Link to="/facultydelete">Faculty Deletion</Link>
          </h3>
        </nav>

        {/* Page Content */}
        <div>
          <Routes>
            <Route path="/facultyregistration" element={<FacultyRegistration />} />
            <Route path="/facultylist" element={<FacultyList />} />
            <Route path="/facultyupdate" element={<FacultyUpdation />} />
            <Route path="/facultydelete" element={<FacultyDeletion />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
