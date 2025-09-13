import React, { useState, useRef, useEffect } from "react";
import "./PhotoGallery.css";
import hall1 from "../assets/gallery/hall1.jpg";
import hall2 from "../assets/gallery/hall2.jpg";
import food1 from "../assets/gallery/food1.jpg";
import food2 from "../assets/gallery/food2.jpg";
import room1 from "../assets/gallery/room1.jpg";
import event1 from "../assets/gallery/event1.jpg";

const galleryImages = [
  { src: hall1, category: "Halls" },
  { src: hall2, category: "Halls" },
  { src: food1, category: "Food" },
  { src: food2, category: "Food" },
  { src: room1, category: "Rooms" },
  { src: event1, category: "Events" },
];

const categories = ["All", "Halls", "Food", "Rooms", "Events"];

const PhotoGallery = () => {
  const [filter, setFilter] = useState("All");
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

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <section className="photo-gallery-section" ref={sectionRef}>
      <h2>Photo Gallery / Virtual Tour</h2>
      <div className="gallery-filters">
        {categories.map((cat, idx) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
            style={{"--i": idx}}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {filteredImages.map((img, idx) => (
          <div className="gallery-card" key={idx} style={{"--i": idx}}>
            <div className="image-container">
              <img src={img.src} alt={img.category} />
              <div className="image-overlay">
                <span className="category-tag">{img.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
  {/* ...existing code... */}
    </section>
  );
};

export default PhotoGallery;
