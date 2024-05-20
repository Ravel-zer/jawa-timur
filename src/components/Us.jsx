import React from "react";
import "../assets/css/style.css";
import menuImg1 from "../assets/images/Us/1.jpg";
import menuImg2 from "../assets/images/Us/2.jpg";
import menuImg3 from "../assets/images/Us/3.jpg";
import menuImg4 from "../assets/images/Us/4.jpg";

const menuData = [
  { img: menuImg1, title: "Evan Luthfi Wibowo", subtitle: "00000102674" },
  { img: menuImg2, title: "Denito Fransiskus Triarta S.", subtitle: "00000104848" },
  { img: menuImg3, title: "Muhammad Reza Alfaridzi", subtitle: "00000103152" },
  { img: menuImg4, title: "Muhammad Relly Al Azhari", subtitle: "00000104797" },
];

const Us = () => (
  <section id="menu" className="menu">
    <h2>
      Kelompok<span> 8</span>
    </h2>
    <p>IF231-H Kelompok 8 PTI</p>
    <div className="row">
      {menuData.map((item, index) => (
        <div className="menu-card" key={index}>
          <img src={item.img} alt={item.title} className="menu-card-img" />
          <h3 className="menu-card-title">- {item.title} -</h3>
          <h4 className="menu-card-subtitle">{item.subtitle}</h4>
        </div>
      ))}
    </div>
  </section>
);

export default Us;
