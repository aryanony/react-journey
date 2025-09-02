import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
      <div>App</div>
      <br />
      <div>
        <Router>
          <nav>
            <Link to='/'>Home</Link> &nbsp;
            <Link to='/about'>About Us</Link> &nbsp;
            <Link to='/contact'>Contact Us</Link> &nbsp;
          </nav>
          <div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  )
}

export default App