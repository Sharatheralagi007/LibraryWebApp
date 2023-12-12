import React from 'react'

const Catalog = () => {
  return (
    <div className="flex-containers">
      <nav className='resourcenavbarlist'>
          <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/catalog">Catalog</a></li>                  
          <li><a href="#quetionpapers">Question Papers</a></li>
          <li><a href="/gallery">Gallery</a></li>
          
          
        </ul>
      </nav>
      <div>
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
      </div>
      </div>
  )
}

export default Catalog;