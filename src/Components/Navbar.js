import React from 'react'

export const Navbar = () => {
  return (
    <div>
            <label>
      <input type="checkbox" />
      <div className="toggle">
        <span className="top_line common"></span>
        <span className="midle_line common"></span>
        <span className="bottom_line common"></span>
      </div>

      <nav className='hamnavbar'>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/resources">Resources</a></li>
                <li><a href="/catalog">Catalog</a></li>
                <li><a href="#collection">Collections</a></li>
                <li><a href="#quetionpapers">Question Papers</a></li>
                <li><a href="#quicklinks">Quick Links</a></li>
                
                
              </ul>
            </nav>
      </label>

    </div>
  )
}
