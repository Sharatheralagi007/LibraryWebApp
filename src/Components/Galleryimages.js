import React from 'react'
import '../App.css'
import './galleryimages.css';


const Galleryimages = () => {
  return (
    <div className="flex-container">
    <nav className='resourcenavbarlist'>
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/resources">Resources</a></li>
        <li><a href="/catalog">Catalog</a></li>
              {/* <li><a href="#collection">Collections</a></li> */}
              <li><a href="#quetionpapers">Question Papers</a></li>
              <li><a href="/gallery">Gallery</a></li>
             
        
      </ul>
    </nav>
    <div className='img'><img src="lib1.jpg" alt="" /></div>
    <div className='img'><img src="lib1.jpg" alt="" /></div>
    <div className='img'><img src="lib1.jpg" alt="" /></div>
    </div>
  )
}

export default Galleryimages;