import React from "react";
import VideoComponent from "./VideoComponent";

const About = () => (
  <section id="about" className="about">
    <h2>
      <span>History</span>
    </h2>
    <div className="row">
      <div className="about-img">
        <VideoComponent />
      </div>
      <div className="content">
        <h3>Jawa Timur</h3>
        <p>
          Jawa Timur yang semula merupakan wilayah pinggiran dari Kerajaan Mataram Kuno di Jawa Tengah, kemudian mendapatkan momentum sebagai pusat kekuasaan berbagai kerajaan, seperti Medang (937-1017), Kahuripan (1019-1049), Daha-Janggala
          (1080-1222), Singasari (1222-1292) dan Majapahit (1293-1527)
        </p>
        <p>
          Provinsi Jawa Timur secara geografis terletak di antara 11100 Bujur Timur – 11404' Bujur Timur dan 70 12'Lintang Selatan – 8048”Lintang Selatan , dengan luas wilayah sebesar 47.963 km2 yang meliputi dua bagian utama. Yaitu Jawa
          Timur daratan dan Kepulauan Madura.
        </p>
      </div>
    </div>
  </section>
);

export default About;
