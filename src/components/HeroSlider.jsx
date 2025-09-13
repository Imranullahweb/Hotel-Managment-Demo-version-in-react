import React, { useState, useEffect } from "react";
import "./HeroSlider.css";


// Example images, replace with your own in src/assets/slider
import slide1 from "../assets/slider/slide1.jpg";
import slide2 from "../assets/slider/slide2.jpg";
import slide3 from "../assets/slider/slide3.jpg";
const images = [slide1, slide2, slide3];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [current, length]);

  const scrollToHalls = () => {
    const hallsSection = document.querySelector('.hall-showcase-section');
    if (hallsSection) {
      hallsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-slider">
      {images.map((img, idx) => (
        <div
          className={`slide${idx === current ? " active" : ""}`}
          key={idx}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="hero-overlay">
            <div className="hero-content">
              <h1 className="hero-logo">Alhamra Wedding Hall</h1>
              <p className="hero-tagline">Elegance. Luxury. Memories.</p>
              <button className="hero-cta" onClick={scrollToHalls}>
                Explore Our Halls
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="slider-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={idx === current ? "dot active" : "dot"}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
