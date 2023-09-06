import React, { useState } from 'react';
import './App.css';
import notifications from './notifications';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import NotificationComponent from './Components/NotificationBox';
import LibraryRules from './Components/LibraryRules';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Home';
import LibraryFAQ from './Components/LibraryFAQ';
import Catalog from './Components/Catalog';
import About from './Components/About';
function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <>
    

    <Router>
    <nav class="navbar">
  <div class="logo">
    {/* <img src='Logos-01.png'/> */}
  </div>
  <ul class="nav-links">
    <li><Link to='/'>Home</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li class="dropdown">
      <a href="#">Services</a>
      <div class="dropdown-content">
        <a href="#resources">E-Learning Resources</a>
        <a href="#employee-table">Human Resources</a>
       
      </div>
    </li>
    <li><Link to='/catalog'>Catalog</Link></li>
    <li><Link to='/faq'>Faq</Link></li>

    <li><a href="#">Contact</a></li>
    <li className='dropdown'>
    <a href="#">Quick Links</a>
    <div class="dropdown-content">
    <a href="#">E-Resources</a>
    <a href="http://www.nptelvideos.in/">Online Catalogue(EPAC)</a>
    <a href="http://www.nptelvideos.in/">NPTEL(E-Learning)</a>
    <a href="https://www.klescet.ac.in/library-vtu-qp/">Old Question Papers</a>
    <a href="#rules">Library Rules</a>
    </div>
    </li>
  </ul>
</nav>
      <Routes>
        
        <Route  exact path="/" Component={Home} />
        <Route path='/faq' Component={LibraryFAQ}/>
        <Route path='/catalog' Component={Catalog}/>
        <Route path='/about' Component={About}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
