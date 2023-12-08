import React from 'react'
import "../App.css"
// import '../Home.css'

const Resources = () => {
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
    <div><section id="resources">
    <div>
        <h1 className='Resources'><u>Resources</u></h1>
    <h2>E – Learning Resources</h2>
    <div >
    <ul >
      <li className='reshover'><a href="http://172.16.42.174/LocalGuru/index.php"><div className='reslinks'>NPTEL</div> </a></li>
      <li className='reshover'><a href="http://elearning.vtu.ac.in/"><div className='reslinks'>VTU e-Learning Resources</div></a></li>
    </ul>
    </div>
    <h3>National Digital Library(NDL)</h3>
    <p>
      The Ministry of Human Resource Development, Govt. of India, under its National Mission on Education through Information and Communication Technology (NMEICT), has set-up National Digital Library (NDL) to facilitate search and access the full text e-content materials through a single window.
    </p>
    <p className='reshover'>
      <a href="https://ndl.iitkgp.ac.in/" target="_blank" rel="noopener noreferrer"><div className='reslinks'>https://ndl.iitkgp.ac.in/</div></a>
    </p>
    <h3>E-Content: ICT Initiatives from Govt. of Karnataka</h3>
    <p>
      The Govt. of Karnataka has initiated more than 85 ICT projects for the use of educational institutes and the various stakeholders. These projects are now available online for the benefit of the student and teaching community. The E-content includes videos, presentations, etc from experts in the domain.
    </p>
    <p className='reshover'>
      <a href="http://164.100.133.129:81/econtent/" target="_blank" rel="noopener noreferrer"><div className='reslinks'>http://164.100.133.129:81/econtent/</div></a>
    </p>
        <h3>DELNET MEMBERSHIP</h3>
    <p>
      The library is a member of the DELNET. The library maintains excellent relations with a number of major Institutions and libraries in India through DELNET, for exchange of books, journals articles for the mutual benefit of the users.
    </p>
    <p className='reshover'>
      <a href="http://Delnet.nic.in" target="_blank" rel="noopener noreferrer"><div className='reslinks'>http://Delnet.nic.in</div></a>
    </p>
    <h3>OPEN ACCESS RESOURCES</h3>
    
    <p className='reshover'>
      <a href="http://diete-resources.blogspot.com/2012/03/open-access-journals.html" target="_blank" rel="noopener noreferrer"><div className='reslinks'>Open Access Journals</div></a>
    </p>
    <p className='reshover'>
      <a href="https://indianjournals.com/ijor.aspx?target=open_access_publications_list" target="_blank" rel="noopener noreferrer"><div className='reslinks'>open_access_publications_list</div></a>
    </p>
    <p className='reshover'>
      <a href="http://diete-resources.blogspot.com/2011/10/doaj-directory-of-open-access-journals.html" target="_blank" rel="noopener noreferrer"><div className='reslinks'>DOAJ -- Directory of Open Access Journals</div></a>
    </p>
    <p className='reshover'> 
      <a href="https://www.doaj.org/" target="_blank" rel="noopener noreferrer"><div className='reslinks'>DOAJ </div></a>
    </p>
    <p className='reshover'>
      <a href="https://drive.google.com/file/d/1SI_97nB3DVpMprvVg5OLviKqueeRT-I2/view" target="_blank" rel="noopener noreferrer"><div className='reslinks'>Open Access Resources in Engineering and Technological Field</div></a>
    </p>
    
  </div>
  <p>
        <h3 className='fontchange'>Remote Access</h3>
        The Institution Library also have the facility to give access e- resources to outside the Campus
        Network. The Authenticate users by using User Name &amp; Password to access remotely the
        subscribed e- resources through the VTU consortia.
    </p>
    <p className='reshover'>
      <a href="http://klesmsscet.new.knimbus.com" target="_blank" rel="noopener noreferrer"><div className='reslinks'>http://klesmsscet.new.knimbus.com</div></a>
    </p>
  <div className='img'>
  <img src="RemoteAccess.jpg"   />

  </div>
    
    
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
    </div>
    </div>
  )
}

export default Resources