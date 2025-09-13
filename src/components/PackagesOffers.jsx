import React, { useRef, useEffect } from "react";
import "./PackagesOffers.css";

const packages = [
  {
    name: "Classic Wedding Package",
    details: [
      "Crystal Hall (Up to 500 guests)",
      "10 Luxury Rooms",
      "BBQ & Continental Food Stalls",
      "Event Decor & Lighting",
    ],
    price: "PKR 350,000",
    save: "Save PKR 50,000 by bundling!",
  },
  {
    name: "Premium Celebration Package",
    details: [
      "Rose Garden Hall (Up to 350 guests)",
      "5 Luxury Rooms",
      "Desi & Sweets Food Stalls",
      "Live Music & DJ",
    ],
    price: "PKR 250,000",
    save: "Save PKR 30,000 by bundling!",
  },
  {
    name: "Corporate Event Package",
    details: [
      "Pearl Banquet (Up to 400 guests)",
      "8 Double Rooms",
      "Continental Food Stall",
      "Projector & AV Setup",
    ],
    price: "PKR 280,000",
    save: "Save PKR 40,000 by bundling!",
  },
];

const PackagesOffers = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      {
        threshold: 0.1,
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
    <section className="packages-offers-section" ref={sectionRef}>
      <h2>Packages & Offers</h2>
      <div className="packages-grid">
        {packages.map((pkg, idx) => (
        <div className="package-card" key={idx} style={{"--i": idx}}>
          <h3>{pkg.name}</h3>
          <ul className="package-details">
            {pkg.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
          <div className="package-price">{pkg.price}</div>
          <div className="package-save">{pkg.save}</div>
          <button className="package-book-btn">Book This Package</button>
        </div>
      ))}
    </div>
  </section>
  );
};

export default PackagesOffers;
