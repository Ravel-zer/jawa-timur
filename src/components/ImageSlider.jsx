import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/style.css";
import image1 from "../assets/images/Wisata/1.jpg";
import image2 from "../assets/images/Wisata/2.jpg";
import image3 from "../assets/images/Wisata/3.jpg";
import image4 from "../assets/images/Wisata/4.jpg";
import image5 from "../assets/images/Wisata/5.jpg";
import image6 from "../assets/images/Wisata/6.jpg";

const ImageSlider = () => {
  const images = [
    {
      url: image1,
      description: "Gunung Bromo",
    },
    {
      url: image2,
      description: "Kawah Ijen",
    },
    {
      url: image3,
      description: "Taman Nasional Alas Purwo",
    },
    {
      url: image4,
      description: "Taman Nasional Meru Betiri",
    },
    {
      url: image5,
      description: "Pulau Sempu",
    },
    {
      url: image6,
      description: "Pantai Plengkung",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="image-slider-container" id="slider">
      <h2>
        <span>Tempat</span> Wisata
      </h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="image-card">
            <img src={image.url} alt={`Image ${index + 1}`} />
            <div className="description">
              <h3>{image.description}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
