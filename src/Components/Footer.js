import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
   <div className="container">
  <div className="footer-content">

    <div className="contact-info">
      <div className="hod-info">
        <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            {/* <img src="your-logo.png" alt="Company Logo" /> */}
          </div>
          <div className="contact-info">
            <div className="hod-info">
              <h3 color='#bf2d2d'>Contact HOD</h3>
              <div className="para">
              <p>
                Dr. Satish V. Totar
                <br />
                Library and Information Center
                <br />
                Dr. M.S. Sheshgiri College of Engineering and Technology
                <br />
                Belgaum – 590008
              </p>
              <p>
                Phone: 8312440322 Ext 119
                <br />
                Email: <a href="mailto:satishtotar@klescet.ac.in">satishtotar@klescet.ac.in</a>
              </p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
      </div>
      {/* <div className="vertical-line"></div> */}
    </div>
  </div>
  <div className="vertical-line"></div>
  <div className="quick-links">
    <h3 color='#bf2d2d'>Quick Links</h3>
    <ul>
    <li>
         <a  className='links' href="https://www.klescet.ac.in/library/"> Library Website</a>
          </li>
          <li>
         <a className='links' href="https://www.klescet.ac.in/library-e-resources/"> E- Resources</a>
          </li>
          <li>
         <a className='links' href=" http://103.219.60.67/
        "> Online Catalogue</a>
          </li>
          <li>
         <a className='links' href="http://www.nptelvideos.in/"> NPTEL (E- Learning)</a>
          </li>
          <li>
         <a className='links' href="https://www.klescet.ac.in/library-vtu-qp/"> Old QUESTION PAPERS</a>
          </li>
          <li>
         <a className='links' href="https://www.klescet.ac.in/library-rules/"> Library Rules</a>
          </li>
    </ul>
  </div>
  <div className="vertical-line"></div>
  <div className="applogo">
    <a href="https://play.google.com/store/apps/details?id=com.kle.library"><img src="favicon.jpg" alt="" /></a>
    <a href="https://play.google.com/store/apps/details?id=com.kle.library"><h5>Library App</h5></a>
  </div>
</div>

    </footer>
  );
};

export default Footer;
