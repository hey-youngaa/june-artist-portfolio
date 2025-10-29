import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { SlMenu } from "react-icons/sl";
import { FiX } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import './Navbar.scss';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Toggle mobile menu
    const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

    // Close mobile menu when a navbar-link is clicked on
    const handleLinkClick = () => setMobileMenuOpen(false);



  return (
    <nav>
        <div className="navbar-header">
            <div className="navbar-logo">
                <NavLink to="/">JUNE</NavLink>
            </div>

            {/* Hamburger Button */}
             <button className='navbar-burger' aria-label='toggle menu' aria-expanded={isMobileMenuOpen} onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <FiX size={32}/> : <SlMenu size={32}/>}
            </button>            
        </div>


        {/* Show or hide nav links based on mobile menu state */}
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>

            <NavLink to='/sculpture' className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={handleLinkClick}>sculpture</NavLink>
            <NavLink to='/painting'className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={handleLinkClick}>painting</NavLink>
            <NavLink to='/drawing' className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={handleLinkClick}>drawing</NavLink>
            <NavLink to='/digital' className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={handleLinkClick}>digital</NavLink>
            <NavLink to='/sketchbook' className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={handleLinkClick}>sketchbook</NavLink>
            <NavLink to='/about' className={({ isActive }) => (isActive ? 'active-link' : '')} onClick={handleLinkClick}>about</NavLink>
            <a href='mailto:ju.choi168@gmail.com' title='contact me via email'>
                <IoIosMail size={24} />
            </a>
        </div>
    </nav>
  )
}

export default Navbar;
