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
          <li className='list__item'><Link to='skills' className="menu__item" onClick={toggleMenu}>Skills</Link></li>
          <li className='list__item'><Link to='experience' className="menu__item" onClick={toggleMenu}>Work Experience</Link></li>
          <li className='list__item'><Link to='contact' className="menu__item" onClick={toggleMenu}>Contact me</Link></li>
          <button className="nav__button" onClick={toggleMenu}><Link to='contact'>Hire Me</Link></button>
        </ul>
      </div>
    </div>
  )
}

export default MobileNav