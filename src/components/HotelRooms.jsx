import React, { useRef, useEffect } from "react";
import "./HotelRooms.css";
import single from "../assets/rooms/single.jpg";
import double from "../assets/rooms/double.jpg";
import suite from "../assets/rooms/suite.jpg";

const rooms = [
  {
    name: "Single Room",
    price: "PKR 6,000/night",
    amenities: ["WiFi", "AC", "Breakfast"],
    image: single,
  },
  {
    name: "Double Room",
    price: "PKR 9,500/night",
    amenities: ["WiFi", "AC", "Breakfast"],
    image: double,
  },
  {
    name: "Luxury Suite",
    price: "PKR 18,000/night",
    amenities: ["WiFi", "AC", "Breakfast", "Mini Bar", "Jacuzzi"],
    image: suite,
  },
];

const HotelRooms = () => {
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
    <section className="hotel-rooms-section" ref={sectionRef}>
      <h2>Hotel Rooms & Accommodation</h2>
      <div className="room-grid">
        {rooms.map((room, idx) => (
        <div className="room-card" key={idx} style={{"--i": idx}}>
          <img src={room.image} alt={room.name} className="room-thumb" />
          <div className="room-info">
            <h3>{room.name}</h3>
            <p className="room-price">{room.price}</p>
            <ul className="room-amenities">
              {room.amenities.map((am, i) => (
                <li key={i}>{am}</li>
              ))}
            </ul>
            <button className="room-book-btn">Book Now</button>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default HotelRooms;
