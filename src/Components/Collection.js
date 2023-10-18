import React from 'react'
import './collection.css';

const Collections = () => {
  return (
    <>
      <h2>Collections</h2>
    <div className="grid-container">
      <div className="grid-item">
        <h3>67502</h3>
        <p>General Books</p>
      </div>

      <div className="grid-item">
        <h3>36483</h3>
        <p>Lending Library</p>
      </div>

      <div className="grid-item">
        <h3>3400</h3>
        <p>Book Bank</p>
      </div>
      
      <div className="grid-item">
        <div>
        <h3>91</h3>
         <p>Indian Journals</p>
      </div>
      </div>

      <div className="grid-item">
        <h3>7000+</h3>
      <p>International journals (e-journals)</p>
      </div>

      <div className="grid-item">
        <h3>3400</h3>
      <p>CD-ROM's</p>
      </div>
    </div>
    </>
  );
};


export default Collections;
