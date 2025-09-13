import React, { useState, useEffect, useRef } from "react";
import "./AboutUs.css";
import about1 from "../assets/about/about1.jpg";
import about2 from "../assets/about/about2.jpg";
import about3 from "../assets/about/about3.jpg";

const images = [about1, about2, about3];

const AboutUs = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3500);
    return () => clearTimeout(timer);
  }, [current, length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
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
    <section className="about-us-section" ref={sectionRef}>
      <div className="about-us-content">
        <h2>About Us</h2>
        <p>
          With four modern halls, luxury rooms, and fine dining stalls, we host weddings, parties, and corporate events with elegance and ease. Our venue blends history, spacious capacity, and unique style to make every event memorable.
        </p>
        {/* Example video embed, replace src with your own video if available */}
        <div className="about-us-media">
          <video width="320" height="180" controls poster={images[0]}>
            <source src="/video/about.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="about-us-slider">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`About us ${idx + 1}`}
                className={idx === current ? "active" : ""}
                style={{ display: idx === current ? "block" : "none" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
