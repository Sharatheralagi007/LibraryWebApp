import React, { useState } from 'react';
import './App.css';
import notifications from './notifications';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import NotificationComponent from './Components/NotificationBox';
import LibraryRules from './Components/LibraryRules';
function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="App">
      {/* <header className="header-container">
        <img src="library-with-books.jpg" alt="Library Banner" />
        <h1>Welcome to the "Jnana Chetana"</h1>
      </header> */}
      <div class="header-container">
  <h1 className='welcome-text'>Welcome to Jnana Chetana</h1>
  <div class="overlay"></div>
  <div class="image-background"></div>
</div>

      {/* <nav>
        <ul>
          <li><a href="#catalog">Catalog</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href='#employee-table'>Staff</a></li>
        </ul>
      </nav> */}
      <nav class="navbar">
  <div class="logo">
    <a href="#">Library</a>
  </div>
  <ul class="nav-links">
    <li><a href="#welcome">Home</a></li>
    <li><a href="#about-us">About Us</a></li>
    <li class="dropdown">
      <a href="#">Services</a>
      <div class="dropdown-content">
        <a href="#resources">E-Learning Resources</a>
        <a href="#employee-table">Human Resources</a>
       
      </div>
    </li>
    <li><a href="#catalog">Catalog</a></li>
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

      <section id="welcome">
        <h2>Welcome to the Library and Information Center</h2>
        <p>
          Our library is centrally located in the campus, housed in a three-story ultra-modern Library Building named "JNANA CHETANA." We take pride in our excellent collection of books, journals, and non-book materials in Engineering Technology and Management.
        </p>
        <p>
          With over 106,000 volumes, our library collection is regularly updated with new literature, including textbooks, reference books, reports, proceedings, encyclopedias, standards (National & International) Journals, Audio Visual resources, CDs, educational videos, and thesis/reports.
        </p>
      </section>
      <section id="catalog">
        <h2>Library Online Catalogue</h2>
        <p>
          Online catalogue facility is available to users through intranet and Internet. By clicking this link <a href="http://103.139.157.231/" target="_blank" rel="noopener noreferrer">EPAC</a> or URL: <a href="http://103.139.157.231/" target="_blank" rel="noopener noreferrer">http://103.139.157.231/</a> search page is opened for searching Library resources.
        </p>
        <p>
          The main features of the EPAC are:
          <ul>
            <li>Check the availability of books by author, title, keyword, etc.</li>
            <li>Find loan periods, renew, or place holds.</li>
            <li>Check your library account for issued items and due dates.</li>
            <li>Stay updated on new arrivals of books, magazines, and digital subscriptions.</li>
          </ul>
        </p>
      </section>
      <section id="events">
        {/* Events content */}
      </section>
      <section id="resources">
      <div>
      <h2>E – Learning Resources</h2>
      <ul>
        <li><a href="http://172.16.42.174/LocalGuru/index.php">NPTEL</a></li>
        <li><a href="http://elearning.vtu.ac.in/">VTU e-Learning Resources</a></li>
      </ul>
      <p>
        The Ministry of Human Resource Development, Govt. of India, under its National Mission on Education through Information and Communication Technology (NMEICT), has set-up National Digital Library (NDL) to facilitate search and access the full text e-content materials through a single window.
      </p>
      <p>
        <a href="https://ndl.iitkgp.ac.in/" target="_blank" rel="noopener noreferrer">National Digital Library (NDL)</a>
      </p>
      <p>
        The Govt. of Karnataka has initiated more than 85 ICT projects for the use of educational institutes and the various stakeholders. These projects are now available online for the benefit of the student and teaching community. The E-content includes videos, presentations, etc from experts in the domain.
      </p>
      <p>
        <a href="http://164.100.133.129:81/econtent/" target="_blank" rel="noopener noreferrer">E-Content: ICT Initiatives from Govt. of Karnataka</a>
      </p>
      <p>
        The library is a member of the DELNET. The library maintains excellent relations with a number of major Institutions and libraries in India through DELNET, for exchange of books, journals articles for the mutual benefit of the users.
      </p>
      <p>
        <a href="http://Delnet.nic.in" target="_blank" rel="noopener noreferrer">DELNET MEMBERSHIP</a>
      </p>
      <p>
        <a href="http://diete-resources.blogspot.com/2012/03/open-access-journals.html" target="_blank" rel="noopener noreferrer">Open Access Journals</a>
      </p>
      <p>
        <a href="https://indianjournals.com/ijor.aspx?target=open_access_publications_list" target="_blank" rel="noopener noreferrer">open_access_publications_list</a>
      </p>
      <p>
        <a href="http://diete-resources.blogspot.com/2011/10/doaj-directory-of-open-access-journals.html" target="_blank" rel="noopener noreferrer">DOAJ -- Directory of Open Access Journals</a>
      </p>
      <p>
        <a href="https://www.doaj.org/" target="_blank" rel="noopener noreferrer">DOAJ </a>
      </p>
      <p>
        <a href="https://drive.google.com/file/d/1SI_97nB3DVpMprvVg5OLviKqueeRT-I2/view" target="_blank" rel="noopener noreferrer">Open Access Resources in Engineering and Technological Field</a>
      </p>
    </div>
      </section>
      <section id="services">
        {/* Services content */}
      </section>
      <section id="about-us">
  <h2>About Us</h2>
  <p>
    The library is centrally located in the campus, housed in an independent building covering an area of 1700 square meters. It has a total seating capacity of 350 students at a time. The library boasts over 108,000 volumes, which are regularly updated with new literature including textbooks, reference books, reports, proceedings, encyclopedias, standards (National & International) Journals, Audio-Visual resources, CDs, educational videos, and theses/reports.
  </p>
  <p>
    The library is automated using KOHA, an Integrated Library Management software. KOHA is an open-source and multi-user package designed for effective library management from all aspects. The online catalog of the library and e-resources can be accessed on the campus network. The library subscribes to nearly 80 Technical Periodicals and more than 9811 International e-journals from IEL, Springer Link, Taylor and Francis, Emerald, and ProQuest. Additionally, the library offers access to 16,800 full-text E-Books from major publishers. The collection also includes 4200 Bound volumes of journals, 3878 Compact Discs (CDs), and 200 IS Standards.
  </p>
  <h3>Library Atmosphere</h3>
  <p>
    When readers enter the library, they will find an atmosphere of perfect silence, orderliness, and decorum. Your appreciation of these factors and active cooperation in maintaining them is greatly appreciated. This atmosphere encourages reading and radiates a sense of joy to everyone within the library.
  </p>
  <h3>Library Automation</h3>
  <p>
    The library is automated using KOHA, an open-source and multi-user package for effective library management.
  </p>
  <h3>Online Access</h3>
  <p>
    The online catalog of the library and e-resources can be accessed both on the campus network and remotely.
  </p>
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
          <br />
          Head - Library and Information Center
          <br />
          K.L.E. Dr. M.S. Sheshgiri College of Engineering and Technology
          <br />
          Udyambag, Belgaum – 590008
          <br />
          Ph – 08312440322 Ext 119
          <br />
          Mail to: <a href="mailto:satishtotar@klescet.ac.in">satishtotar@klescet.ac.in</a>
        </p>
      </div>
</section><div id='rules'>
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
    </div> */}
    <NotificationComponent/>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;
