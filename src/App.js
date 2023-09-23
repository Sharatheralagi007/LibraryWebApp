import React, { useState } from 'react';
import './App.css';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Home';
import LibraryFAQ from './Components/LibraryFAQ';
import Catalog from './Components/Catalog';

import About from './Components/About';
import NotificationManager from './Components/NotificationManager';
import Resources from './Components/Resources';
function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <>
    

    <Router>
    <div class="navbar">
      <div className='klelogo'>
        <img src="kleslogo.png" width="64px" />
      </div>
  <div class="logo">
    <img src='clglogo.png'/>
  </div>
 
  <ul class="nav-links">
    <Link to='/'><HomeIcon fontSize="large" /></Link>
    {/* <li><Link to="/about">About Us</Link></li> */}
    {/* <li class="dropdown">
      <a href="#">Services</a>
      <div class="dropdown-content">
        <a href="#resources">E-Learning Resources</a>
        <a href="#employee-table">Human Resources</a>
       
      </div>
    </li> */}
    {/* <li><Link to='/catalog'>Catalog</Link></li> */}
    <a href="#"><PhoneIcon fontSize="large" /></a>
    <Link to='/faq'>FAQ</Link>  


    {/* <li className='dropdown'>
    <a href="#">Quick Links</a>
    <div class="dropdown-content">
    <a href="#">E-Resources</a>
    <a href="http://www.nptelvideos.in/">Online Catalogue(EPAC)</a>
    <a href="http://www.nptelvideos.in/">NPTEL(E-Learning)</a>
    <a href="https://www.klescet.ac.in/library-vtu-qp/">Old Question Papers</a>
    <a href="#rules">Library Rules</a>
    </div>
    </li> */}
  </ul>
  
  
  
</div>
      <Routes>
        
        <Route  exact path="/" Component={Home} />
        <Route path='/faq' Component={LibraryFAQ}/>
        <Route path='/catalog' Component={Catalog}/>
        <Route path='/about' Component={About}/>
        <Route path='/managenotifications' Component={NotificationManager}/>
        <Route path='/resources' Component={Resources}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;

// first change
