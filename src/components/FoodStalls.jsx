import React, { useRef, useEffect } from "react";
import "./FoodStalls.css";
import bbq from "../assets/food/bbq.jpg";
import continental from "../assets/food/continental.jpg";
import desi from "../assets/food/desi.jpg";
import sweets from "../assets/food/sweets.jpg";

const stalls = [
  {
    name: "BBQ Stall",
    cuisine: "BBQ",
    description: "Grilled meats, kebabs, and smoky flavors for your events.",
    image: bbq,
  },
  {
    name: "Continental Stall",
    cuisine: "Continental",
    description: "International dishes, pasta, and gourmet specialties.",
    image: continental,
  },
  {
    name: "Desi Stall",
    cuisine: "Desi",
    description: "Traditional Pakistani cuisine, biryani, karahi, and more.",
    image: desi,
  },
  {
    name: "Sweets Stall",
    cuisine: "Sweets",
    description: "Delicious desserts, cakes, and mithai for every celebration.",
    image: sweets,
  },
];

const FoodStalls = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      {
        threshold: 0.15,
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
    <section className="food-stalls-section" ref={sectionRef}>
      <h2>Food Stalls & Restaurants</h2>
      <div className="food-grid">
        {stalls.map((stall, idx) => (
        <div className="food-card" key={idx} style={{"--i": idx}}>
          <img src={stall.image} alt={stall.name} className="food-thumb" />
          <div className="food-info">
            <h3>{stall.name}</h3>
            <p className="food-cuisine">{stall.cuisine}</p>
            <p className="food-desc">{stall.description}</p>
            <button className="food-catering-btn">Catering Services</button>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default FoodStalls;
