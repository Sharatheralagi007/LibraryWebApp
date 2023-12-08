
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
import BookCoverflow from './Components/BookCoverflow';
import Footer from './Components/Footer';
import Galleryimages from './Components/Galleryimages';

function Home() {
  
  return (
    <div id="app" className="App">
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
              <li><Link to="#app">Home</Link></li>
                <li><a href="/resources">Resources</a></li>
                <li><a href="/catalog">Catalog</a></li>
                <li><a href="#collection">Collections</a></li>
                <li><a href="#quetionpapers">Question Papers</a></li>
                <li><a href="#footer">Quick Links</a></li>
                <li><a href="/gallery">Gallery</a></li>
                

                
                
              </ul>
           
            </nav>
          
          {/* <section></section> */}
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
            
         <BookCoverflow/>
         {/* <NewArrivals/> */}
      <div  id='collection' className="collection">
        <Collections/>
      </div>
      <div class="col-md-12 d-flex justify-content-center">
                <h2>Testimonials of Library</h2>
            </div>     
<div className="testimonials">
 <section class="home-testimonial">
    <div class="container-fluid">
        <div class="home-testimonial-bottom">
            <div class="container testimonial-inner">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-4 style-3">
                        <div class="tour-item ">
                            <div class="tour-desc bg-white">
                                <div class="tour-text color-grey-3 text-center">&ldquo;At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.&rdquo;</div>
                                <div class="d-flex justify-content-center pt-2 pb-2"><img class="tm-people" src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg" alt=""/></div>
                                <div class="link-name d-flex justify-content-center">Balbir Kaur</div>
                                <div class="link-position d-flex justify-content-center">Student</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 style-3">
                        <div class="tour-item ">
                            <div class="tour-desc bg-white">
                                <div class="tour-text color-grey-3 text-center">&ldquo;At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.&rdquo;</div>
                                <div class="d-flex justify-content-center pt-2 pb-2"><img class="tm-people" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/></div>
                                <div class="link-name d-flex justify-content-center">Balbir Kaur</div>
                                <div class="link-position d-flex justify-content-center">Student</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 style-3">
                        <div class="tour-item ">
                            <div class="tour-desc bg-white">
                                <div class="tour-text color-grey-3 text-center">&ldquo;At this School, our mission is to balance a rigorous comprehensive college preparatory curriculum with healthy social and emotional development.&rdquo;</div>
                                <div class="d-flex justify-content-center pt-2 pb-2"><img class="tm-people" src="https://images.pexels.com/photos/4946604/pexels-photo-4946604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/></div>
                                <div class="link-name d-flex justify-content-center">Balbir Kaur</div>
                                <div class="link-position d-flex justify-content-center">Student</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</div> 
      

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
    <div id="footer">
      <Footer/>
      </div>
    </div>
  )
}

export default Home