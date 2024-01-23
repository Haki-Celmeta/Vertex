import React from "react";
import './_navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">VT</div>
      <div className="navbar-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;