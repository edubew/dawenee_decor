import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="Business Logo" className="logo" />
        {/* <h1 className="business-name">
          Dawenee Decor<span>& Events</span>
        </h1> */}
      </div>
      <div>
        <h1 className="business-name">
          Dawenee Decor<span> & Events</span>
        </h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/catalogue">Catalogue</Link>
        </li>
        <li>
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li>
          <Link to="/contacts">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
