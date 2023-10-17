
import React, { useState } from 'react';
import './App.css';
import notifications from './notifications';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import NotificationComponent from './Components/NotificationBox';
import LibraryRules from './Components/LibraryRules';
import NewArrivals from './Components/NewArrivals';
import Testimonials from './Components/Testimonials';
import './Home.css'
import DailyQuote from './Components/DailyQuote';
import Collections from './Components/Collection';
import { Link } from 'react-router-dom';
import './Components/Resources.css';
import ImageSlider from './Components/ImageSlider';


function Home() {
  
  return (
    <div className="App">
      {/* <header className="header-container">
        <img src="library-with-books.jpg" alt="Library Banner" />
        <h1>Welcome to the "Jnana Chetana"</h1>
      </header> */}
      <div class="header-container">
            <div>
            <div className='image-background'> <ImageSlider/></div>
              <div class="overlay">
                <div className='welcome'>
                  <h1 className='welcome-text'>Welcome to Jnana Chetana</h1>
                  <p><DailyQuote/></p>
                </div>
              </div>
            </div>
          <div>
        </div>
      </div>    
      <main className="flex-container">       
      <nav className='navbarlist'>
              <ul>
                <li><a href="#welcome">About Us</a></li>
                <li><a href="/resources">Resources</a></li>
                <li><a href="/catalog">Catalog</a></li>
                <li><a href="#collection">Collections</a></li>
                <li><a href="#quetionpapers">Question Papers</a></li>
                <li><a href="#quicklinks">Quick Links</a></li>
                
                
              </ul>
            </nav>
          
          <section></section>
          <div className='contentcontainer'>
      <section id="welcome">
        <h2>Welcome to the Library and Information Center</h2>
        <p className='space'>
              Our Library is centrally located in the campus, housed in independent building having a plinth area
              of 1700 Sq Mts, having total seating capacity of 350 students at a time. The Library has over
              1,08,000 volumes which are updated regularly by way of adding new literature in the form of
              text books, reference books, reports, proceedings, encyclopedias, standards (National &amp;
              International) Journals, Audio Visual resources, CDs, educational videos and thesis/reports.      
        </p>
        <p className='space'>
            Library is automated by using KOHA- Integrated Library management software. It is a
            open source and multi-user package for effective management of a library from all aspects.
            Online catalogue of the library and the e-resources can be accessed on the campus network. The
            library subscribes to nearly 80 Technical Periodicals and More than 9811 International e-journals
            from IEL, Springer Link, Taylor and Francis, Emerald and ProQuest with 16,800 full text E-
            Books From the major Publishers. In addition there are 4200 Bound volumes of journals, 3878
            Compact Discs (CD’s), &amp; 200 IS Standards.
        </p>
        <div className='fsize'>Library Atmosphere</div>
        <p className='space'>When the readers enter the Library they find perfect silence, orderliness and decorum prevailing
            inside, what is needed most is only their appreciation of these factors and an active co-operation
            in maintaining the same. This kind of atmosphere is bound to generate joy and urge to read in
            them and further radiate it to everyone inside the Library.</p>
                  </section> 
            <div className='testimonials'>
              {/* <div className='testimonials2'><Testimonials/> </div> */}
              {/* <div className='testimonials1'><NewArrivals/> </div> */}
            </div>
         
      <div  id='collection' className="collection">
        <Collections/>
      </div>
      
     
      
    <section id="services">
        Services content
      </section>
      
<section id='employee-table'>
  <div>
      <h2>Human Resource</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>SL</th>
            <th>Name of Employee</th>
            <th>Designation</th>
            <th>Qualification</th>
            <th>Experience in Yrs</th>
            <th>Phone No</th>
            <th>E-mail IDs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dr. Satish V. Totar</td>
            <td>Librarian &amp; HOD</td>
            <td>M.L.I.Sc., M.phil, PGDLAN, KSET Ph.D</td>
            <td>13.5</td>
            <td>9972500355</td>
            <td>satishtotar@klescet.ac,in</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Shri. R. B. Chinnannavar</td>
            <td>Asst. Librarian</td>
            <td>M.L.I.Sc.</td>
            <td>34</td>
            <td>9448691451</td>
            <td>ravibc67@yahoo.co.in</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Shri. S.K. Chougala</td>
            <td>Asst. Librarian</td>
            <td>M.L.I.Sc.</td>
            <td>18</td>
            <td>8277797978</td>
            <td>chougalasatish@gmail.com</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Shri. S. R. Gadag</td>
            <td>Lib.Asst.</td>
            <td>M.L.I.Sc.</td>
            <td>14</td>
            <td>9632459987</td>
            <td>srgadag71@gmail.com</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Shri. Anigolmath</td>
            <td>Attender</td>
            <td>C.L.I.Sc</td>
            <td>8.5</td>
            <td>7349609102</td>
            <td>Bassumath9@gmail.com</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Shri. B.M. Hiremath</td>
            <td>Attender</td>
            <td>PUC</td>
            <td>8</td>
            <td>8277448399</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="contact-details">
        <h3>Contact To- HOD and Librarian</h3>
        <p>
          <strong>Dr. Satish V. Totar</strong>
          
           Library and Information Center
          
           Dr. M.S. Sheshgiri College of Engineering and Technology
          
          ag, Belgaum – 590008
          
          8312440322 Ext 119
          
          o: <a href="mailto:satishtotar@klescet.ac.in">satishtotar@klescet.ac.in</a>
        </p>
      </div>
</section>
<div id='rules'>
<LibraryRules/>
</div>
{/* <div className={`notification-box ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="collapse-button" onClick={toggleCollapse}>
        {isCollapsed ? (<FontAwesomeIcon icon={faEye} />) : (<FontAwesomeIcon icon={faEyeSlash} />)}
      </button>
      {!isCollapsed && (
        <div>
          <h2>Notifications</h2>
          {notifications.length === 0 ? (
            <p>No new notifications</p>
          ) : (
            <ul>
              {notifications.map(notification => (
                <li key={notification.id}>
                  <strong>{notification.title}</strong>
                  <p>{notification.message}</p>
                  <small>{new Date(notification.timestamp).toLocaleString()}</small>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>  */}
    </div>
     </main>
    <NotificationComponent/>
    <></>
      <footer>
        Footer content
      </footer>
    </div>
  )
}

export default Home