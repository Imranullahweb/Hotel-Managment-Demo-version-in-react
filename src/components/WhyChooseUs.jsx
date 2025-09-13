import React from "react";
import "./WhyChooseUs.css";
import { FaParking, FaUserTie, FaBed, FaUtensils, FaMapMarkerAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaParking size={36} color="#bfa14a" />,
    text: "Spacious Parking",
  },
  {
    icon: <FaUserTie size={36} color="#bfa14a" />,
    text: "Professional Event Management",
  },
  {
    icon: <FaBed size={36} color="#bfa14a" />,
    text: "Luxury Rooms for Guests",
  },
  {
    icon: <FaUtensils size={36} color="#bfa14a" />,
    text: "Customizable Menus",
  },
  {
    icon: <FaMapMarkerAlt size={36} color="#bfa14a" />,
    text: "Prime Location",
  },
];

const WhyChooseUs = () => (
  <section className="why-choose-us-section">
    <h2>Why Choose Us</h2>
    <div className="features-grid">
      {features.map((f, idx) => (
        <div className="feature-card" key={idx}>
          <div className="feature-icon">{f.icon}</div>
          <div className="feature-text">{f.text}</div>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;
