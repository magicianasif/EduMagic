import React from "react";
import Logo from "../../assets/Logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="container">
      <img src={Logo} alt="" className="logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Programs</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
