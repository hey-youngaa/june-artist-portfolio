import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { SlMenu } from "react-icons/sl";
import { FiX } from "react-icons/fi";
import './Navbar.scss';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Toggle
    const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  return (
    <nav>
        <div className="navbar-header">
            <div className="navbar-logo">
                <Link to="/">JUNE</Link>
            </div>

            {/* Hamburger Button */}
             <button className='navbar-burger' aria-label='toggle menu' aria-expanded={isMobileMenuOpen} onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <FiX/> : <SlMenu/>}
            </button>            
        </div>


        {/* Show or hide nav links based on mobile menu state */}
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <Link to='/sculpture'>sculpture</Link>
            <Link to='/painting'>painting</Link>
            <Link to='/drawing'>drawing</Link>
            <Link to='/digital'>digital</Link>
            <Link to='/sketchbook'>sketchbook</Link>
            <Link to='/about'>about</Link>
        </div>
    </nav>
  )
}

export default Navbar;
