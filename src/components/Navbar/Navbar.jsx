import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { SlArrowDown, SlArrowUp, SlMenu } from "react-icons/sl";
import { FiX } from "react-icons/fi";
import './Navbar.scss';

const Navbar = () => {
    // Dropdown state
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Toggle
    const toggleDropdown = () => setDropdownOpen(prev => !prev);
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
            <div className="navbar-item">
                <button className='dropdown-toggle' aria-expanded={isDropdownOpen} onClick={toggleDropdown}>
                    Works {isDropdownOpen ? <SlArrowUp/> : <SlArrowDown/>}
                </button>

                {isDropdownOpen && (
                <ul className="dropdown-menu open">
                    <li><Link to='/sculpture'>Sculpture</Link></li>
                    <li><Link to='/painting'>Painting</Link></li>
                    <li><Link to='/drawing'>Drawing</Link></li>
                    <li><Link to='/digital'>Digital</Link></li>
                </ul>
                )}
            </div>

            <Link to='/sketchbook'>Sketchbook</Link>
            <Link to='/about'>About</Link>
        </div>
    </nav>
  )
}

export default Navbar;
