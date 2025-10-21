import React, {useState} from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="/">JUNE</Link>
            </div>

            {/* Hamburger Button */}
             <button className='navbar-burger' aria-label='toggle menu' aria-expanded={isMobileMenuOpen} onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <FiX size={32}/> : <SlMenu size={32}/>}
            </button>            
        </div>


        {/* Show or hide nav links based on mobile menu state */}
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>

            <Link to='/sculpture'onClick={handleLinkClick}>sculpture</Link>
            <Link to='/painting' onClick={handleLinkClick}>painting</Link>
            <Link to='/drawing' onClick={handleLinkClick}>drawing</Link>
            <Link to='/digital' onClick={handleLinkClick}>digital</Link>
            <Link to='/sketchbook' onClick={handleLinkClick}>sketchbook</Link>
            <Link to='/about' onClick={handleLinkClick}>about</Link>
            <a href='mailto:ju.choi168@gmail.com' title='contact me via email'>
                <IoIosMail size={24} />
            </a>
        </div>
    </nav>
  )
}

export default Navbar;
