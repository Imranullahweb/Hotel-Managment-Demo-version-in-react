import React, { useRef, useEffect } from "react";
import "./HallShowcase.css";

// Example hall data, replace with your own images and info
import crystal from "../assets/halls/crystal.jpg";
import rose from "../assets/halls/rose.jpg";
import pearl from "../assets/halls/pearl.jpg";

const halls = [
  {
    name: "Crystal Hall",
    capacity: "Up to 500 guests",
    description: "A sparkling, modern hall with luxury decor and lighting.",
    image: crystal,
  },
  {
    name: "Rose Garden Hall",
    capacity: "Up to 350 guests",
    description: "Elegant garden-themed hall with floral arrangements.",
    image: rose,
  },
  {
    name: "Pearl Banquet",
    capacity: "Up to 400 guests",
    description: "Classic banquet hall with spacious seating and stage.",
    image: pearl,
  },
];

const HallShowcase = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="hall-showcase-section" ref={sectionRef}>
      <h2>Our Wedding Halls</h2>
      <div className="hall-grid">
        {halls.map((hall, idx) => (
          <div className="hall-card" key={idx}>
            <img src={hall.image} alt={hall.name} className="hall-thumb" />
            <div className="hall-info">
              <h3>{hall.name}</h3>
              <p className="hall-capacity">{hall.capacity}</p>
              <p className="hall-desc">{hall.description}</p>
              <button className="hall-details-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HallShowcase;
