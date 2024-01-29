import React from "react";
import logo from "../../assets/images/logo-color.png";
import { Link } from "react-router-dom";
import './_navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/"><img src={logo} alt="logo" /></Link>
      </div>
      <div className="navbar-links">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;