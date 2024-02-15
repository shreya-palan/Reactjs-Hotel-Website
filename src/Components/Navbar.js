import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Components/navbar.css';
import logo from '../Assests/logo.png';
import {FaClock, FaPhoneVolume, FaEnvelope} from 'react-icons/fa'


const Navbar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
  return (
    <>
      <nav className='navbar'>
        <div className="container flex_space">
            <div className="menu-icon" onClick={handleClick}>
                <i className={click? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <ul className= {click? "nav-menu active" : "nav-menu"}>
                <li>
                    <li><Link to = '/' onClick={closeMobileMenu}>Home</Link></li>
                    <li><Link to = '/about' onClick={closeMobileMenu}>About</Link></li>
                    <li><Link to = '/gallery' onClick={closeMobileMenu}>Gallery</Link></li>
                    <li><Link to = '/destination' onClick={closeMobileMenu}>Destination</Link></li>
                    <li><Link to = '/blog' onClick={closeMobileMenu}>Blog</Link></li>
                    <li><Link to = '/testimonial' onClick={closeMobileMenu}>Testimonial</Link></li>
                    <li><Link to = '/contact' onClick={closeMobileMenu}>Contact Us</Link></li>
                </li>
            </ul>

            <div className="login-area flex">
                <li>
                    <Link to='/contact'>
                        <button className='primary-btn'>Request a quote</button>
                    </Link>
                </li>
            </div>
        </div>
      </nav>

      <header>
        <div className="container flex_space">
            <div className="logo">
                <img src={logo} alt="logo" width={250} height={100}/>
            </div>

            <div className="contact flex_space">
                <div className="box flex_space">
                    <div className="icons">
                        <i><FaClock /></i>
                    </div>
                    <div className="text">
                        <h4>Working Hours</h4>
                        <Link to="/contact">Monday - Saturday: 9.00am to 6.00pm</Link>
                    </div>
                </div>
                <div className="box flex_space">
                    <div className="icons">
                        <i><FaPhoneVolume /></i>
                    </div>
                    <div className="text">
                        <h4>Call Us</h4>
                        <Link to="/contact">+011 123 4567</Link>
                    </div>
                </div>
                <div className="box flex_space">
                    <div className="icons">
                        <i><FaEnvelope /></i>
                    </div>
                    <div className="text">
                        <h4>Mail Us</h4>
                        <Link to="/contact">info@ourhotel.com</Link>
                    </div>
                </div>
            </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
