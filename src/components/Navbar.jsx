import React, { useState, useEffect } from "react";
import feather from "feather-icons";
import "../assets/css/style.css";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  useEffect(() => {
    feather.replace();
  }, [navActive]);
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        Jawa <span>Timur</span>.
      </a>
      <div className={`navbar-nav ${navActive ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">History</a>
        <a href="#menu">About Us</a>
        <a href="#slider">Wisata</a>
        <a href="#maps">Locations</a>
        <a href="#photo-gallery">Gallery</a>
      </div>
      <div className="navbar-extra">
        <a href="#" id="hamburger-menu" onClick={() => setNavActive(!navActive)}>
          <i data-feather="menu"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
