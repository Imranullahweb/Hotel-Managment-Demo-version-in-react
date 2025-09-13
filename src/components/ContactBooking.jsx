import React from "react";
import "./ContactBooking.css";

const ContactBooking = () => (
  <section className="contact-booking-section">
    <h2>Contact & Quick Booking</h2>
    <div className="contact-booking-grid">
      <form className="contact-form">
        <h3>Quick Booking</h3>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone" required />
        <input type="date" placeholder="Date of Event" required />
        <button type="submit">Book Now</button>
        <a
          href="https://wa.me/923001234567?text=Hello%20Royal%20Banquet%2C%20I%20want%20to%20book%20an%20event."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          Book via WhatsApp
        </a>
      </form>
      <div className="contact-info">
        <h3>Contact & Location</h3>
        <div className="map-embed">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13613.123456789!2d71.478123!3d34.198123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2sRoyal%20Banquet!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="220"
            style={{ border: 0, borderRadius: "1rem" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="social-links">
          <a href="https://facebook.com/royalbanquet" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com/royalbanquet" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com/royalbanquet" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactBooking;
