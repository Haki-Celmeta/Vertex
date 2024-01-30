import React from "react";
import logo from "../../assets/images/logo-color.png";
import { Link, useLocation } from "react-router-dom";
import './_navbar.scss';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <div className="logo">
        <Link to="/"><img src={logo} alt="logo" /></Link>
      </div>
      <div className="navbar-links">
        <ul>
          <li><Link to='/' className={location.pathname === '/' ? 'active-link' : 'nav-link'}>Home</Link></li>
          <li><Link to='/about' className={location.pathname === '/about' ? 'active-link' : 'nav-link'}>About</Link></li>
          <li><Link to='/services' className={location.pathname === '/services' ? 'active-link' : 'nav-link'}>Services</Link></li>
          <li><Link to='/contact' className={location.pathname === '/contact' ? 'active-link' : 'nav-link'}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;