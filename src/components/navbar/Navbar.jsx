import React, { useState } from 'react'
import './Navbar.css'
import { MdOutlineDensityMedium } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import MobileNav from '../mobileNav/MobileNav';
import { Link } from 'react-scroll';

const Navbar = ({ scrollToContact, scrollToExperience }) => {

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
            <li className='list__item'><Link to='top' className="menu__item">Home</Link></li>
            <li className='list__item'><Link to='skills' className="menu__item" offset={-100}>Skills</Link></li>
            <li className='list__item'><Link to='projects' className="menu__item" offset={-100}>Projects</Link></li>
            <li className='list__item'><Link to='experience' className="menu__item" offset={-100}>Work Experience</Link></li>
            <li className='list__item'><Link to='contact' className="menu__item">Contact me</Link></li>
            <Link className='nav__button' to='contact' offset={-90}>Hire Me</Link>
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