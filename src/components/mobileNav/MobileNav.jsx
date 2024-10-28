import { Link } from 'react-scroll'
import './MobileNav.css'
import React from 'react'

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`mobile__menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}>
      <div className="mobile__menu-container">
        <p className="mobile__nav-logo">fsantana.dev</p>
        <ul className='mobile__menu-list'>
          <li className='list__item'><Link to='top' className="menu__item" onClick={toggleMenu}>Home</Link></li>
          <li className='list__item'><Link to='skills' className="menu__item" onClick={toggleMenu} offset={-90}>Skills</Link></li>
          <li className='list__item'><Link to='projects' className="menu__item" onClick={toggleMenu} offset={-90}>Projects</Link></li>
          <li className='list__item'><Link to='experience' className="menu__item" onClick={toggleMenu} offset={-90}>Work Experience</Link></li>
          <li className='list__item'><Link to='contact' className="menu__item" onClick={toggleMenu} offset={-90}>Contact me</Link></li>
          <Link className='nav__button' to='contact' onClick={toggleMenu} offset={-90}>Hire Me</Link>
        </ul>
      </div>
    </div>
  )
}

export default MobileNav