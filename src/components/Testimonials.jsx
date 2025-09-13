import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Ayesha Khan",
    quote:
      "Our wedding at Royal Banquet was magical! The staff, food, and decor exceeded our expectations.",
    rating: 5,
    video: null, // Optionally add video link
  },
  {
    name: "Ali Raza",
    quote:
      "The halls are spacious and beautiful. Our guests loved the food and the service was top-notch.",
    rating: 4,
    video: null,
  },
  {
    name: "Sadia & Imran",
    quote:
      "We booked the full package and saved a lot. Highly recommended for any big event!",
    rating: 5,
    video: null,
  },
];

const Testimonials = () => (
  <section className="testimonials-section">
    <h2>Testimonials / Client Reviews</h2>
    <div className="testimonials-grid">
      {testimonials.map((t, idx) => (
        <div className="testimonial-card" key={idx}>
          <div className="testimonial-rating">
            {Array.from({ length: t.rating }).map((_, i) => (
              <span key={i} className="star">★</span>
            ))}
          </div>
          <blockquote>“{t.quote}”</blockquote>
          <div className="testimonial-name">- {t.name}</div>
          {t.video && (
            <div className="testimonial-video">
              <video width="220" controls>
                <source src={t.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
