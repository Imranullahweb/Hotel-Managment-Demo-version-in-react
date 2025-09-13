import React from "react";

import HeroSlider from "./components/HeroSlider";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import HallShowcase from "./components/HallShowcase";
import HotelRooms from "./components/HotelRooms";
import FoodStalls from "./components/FoodStalls";
import PackagesOffers from "./components/PackagesOffers";
import PhotoGallery from "./components/PhotoGallery";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactBooking from "./components/ContactBooking";
import Footer from "./components/Footer";
import AlhamraSupport from "./components/AlhamraSupport";

function App() {
	return (
		<>
			<Header />	
			<HeroSlider />
			<AboutUs />
			<HallShowcase />
			<HotelRooms />
			<FoodStalls />
			<PackagesOffers />
			<PhotoGallery />
			<Testimonials />
			<WhyChooseUs />
			<ContactBooking />
			<Footer />
			<AlhamraSupport />
		</>
	);
}

export default App;
