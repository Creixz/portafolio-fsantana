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
          <li className='list__item'><a className="menu__item">Home</a></li>
          <li className='list__item'><a className="menu__item">Skills</a></li>
          <li className='list__item'><a className="menu__item">Work Experience</a></li>
          <li className='list__item'><a className="menu__item">Contact me</a></li>
          <button className="nav__button" onClick={() => { }}>Hire Me</button>
        </ul>
      </div>
    </div>
  )
}

export default MobileNav