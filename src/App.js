import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WeatherMap from "./components/WeatherMap";
import Footer from "./components/Footer";
import Us from "./components/Us";
import PhotoGallery from "./components/PhotoGallery";
import ImageSlider from "./components/ImageSlider";
import "feather-icons";
import "./assets/css/style.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Us />
      <ImageSlider />
      <WeatherMap />
      <PhotoGallery />
      <Footer />
    </>
  );
}

export default App;
