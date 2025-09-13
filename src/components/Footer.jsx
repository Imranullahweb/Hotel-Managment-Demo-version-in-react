import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-content">
      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#halls">Halls</a></li>
          <li><a href="#rooms">Rooms</a></li>
          <li><a href="#packages">Packages</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-contact">
        <h4>Contact Info</h4>
        <p>Royal Banquet, Main Road, City</p>
        <p>Phone: <a href="tel:+923001234567">+92 300 1234567</a></p>
        <p>Email: <a href="mailto:info@royalbanquet.com">info@royalbanquet.com</a></p>
      </div>
      <div className="footer-legal">
        <h4>Legal</h4>
        <p>&copy; {new Date().getFullYear()} Royal Banquet. All rights reserved.</p>
        <p><a href="#privacy">Privacy Policy</a></p>
      </div>
    </div>
  </footer>
);

export default Footer;
