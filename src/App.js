import React, { useState } from 'react';
import './App.css';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Home';
import LibraryFAQ from './Components/LibraryFAQ';
import Catalog from './Components/Catalog';
import Galleryimages from './Components/Galleryimages';
import About from './Components/About';
import NotificationManager from './Components/NotificationManager';
import Resources from './Components/Resources';
import { Collection } from 'mongoose';
import Developers from './Components/Developers';


function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <>
    

    <Router>
    <div className="navbar">
      <label>
      <input type="checkbox" />
      <div className="toggle">
        <span className='top_line common'></span>
        <span className='midle_line common'></span>
        <span className='bottom_line common'></span>
      </div>

      <div className="hamnavbar">
        <ul className='hamlist'>
                <li className='list'><a href="/">Home</a></li>
                <li className='list'><a href="/resources">Resources</a></li>
                <li className='list'><a href="/catalog">Catalog</a></li>
                <li className='list'><a href="#collection">Collections</a></li>
                <li className='list'><a href="#quetionpapers">Question Papers</a></li>
                <li className='list'><a href="#footer">Quick Links</a></li>
                <li className='list'><a href="/gallery">Gallery</a></li>
      </ul>
      </div>
      </label>

      <div className='klelogo'>
        <img src="kleslogo.png" width="64px" />
      </div>
  <div class="logo">
    <a href="/"><img src='klelogo.jpg'/></a>
  </div>
 
  <ul class="nav-links">
    <Link to='/'><HomeIcon fontSize="large" /></Link>
    <a href="#"><PhoneIcon fontSize="large" /></a>
    <Link to='/faq'>FAQ</Link>  
    <Link to='/developers'>Developers</Link>  

    {/* <li className='dropdown'>
    <a href="#">Quick Links</a>
    <div class="dropdown-content">c
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
        <Route path='/collection' Component={Collection}/>
        <Route path='/gallery' Component={Galleryimages}/>
        <Route path='/developers' Component={Developers}/>
        

      </Routes>
    </Router>
    </>
  );
}

export default App;

// first change