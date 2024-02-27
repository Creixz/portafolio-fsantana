import React, { useState } from 'react'
import './Navbar.css'
import { MdOutlineDensityMedium } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import MobileNav from '../mobileNav/MobileNav';

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <MobileNav isOpen = {openMenu} toggleMenu={toggleMenu}/>

      <nav className="nav__wrapper">
        <div className="nav__container">
          <p className={`nav__logo ${openMenu ? "active" : ""}`}>fsantana.dev</p>
          <ul className='menu__list'>
            <li className='list__item'><a className="menu__item">Home</a></li>
            <li className='list__item'><a className="menu__item">Skills</a></li>
            <li className='list__item'><a className="menu__item">Work Experience</a></li>
            <li className='list__item'><a className="menu__item">Contact me</a></li>
            <button className="nav__button" onClick={() => { }}>Hire Me</button>
          </ul>
          <button className="sidebar__button" onClick={toggleMenu}>
            {openMenu ? <MdOutlineClose /> : <MdOutlineDensityMedium />}
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar