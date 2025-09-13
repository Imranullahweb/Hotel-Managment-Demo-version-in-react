import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header wedding-header">
      <div className="logo wedding-logo">
        {/* Elegant wedding/banquet logo, replace with your own if needed */}
            <img className="wedding-logo-img" src="./public/Alhamra.png" alt="Wedding Hall Logo" width="100" height="100" />
        <span className="wedding-title">Royal Banquet</span>
      </div>
      <nav className="nav wedding-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#halls">Our Halls</a></li>
          <li><a href="#packages">Packages</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#booking">Booking</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
