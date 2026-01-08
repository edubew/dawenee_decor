import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navbar.css";

function Navbar() {

  const [menu, setMenu] = useState("catalogue");

  return ( 
    <nav className="navbar">
      <div className="nav-brand">
        <img src={logo} alt="Business Logo" className="logo" />
        <h1 className="business-name">
          Dawenee Decor<span>& Events</span>
        </h1>
      </div>
      <ul className="nav-links">
        <li onClick={()=>setMenu("home")} className={menu === "home" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={()=>setMenu("about")} className={menu === "about" ? "active" : ""}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={()=>setMenu("services")} className={menu === "services" ? "active" : ""}>
          <Link to="/services">Services</Link>
        </li>
        <li onClick={()=>setMenu("catalogue")} className={menu === "catalogue" ? "active" : ""}>
          <Link to="/catalogue">Catalogue</Link>
        </li>
        <li onClick={()=>setMenu("testimonials")} className={menu === "testimonials" ? "active" : ""}>
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li onClick={()=>setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>
          <Link to="/contacts">Contact Us</Link>
        </li>
      </ul>
      <div>
        <button className="nav-btn">Book with Us</button>
      </div>
    </nav>
  );
}
export default Navbar;
