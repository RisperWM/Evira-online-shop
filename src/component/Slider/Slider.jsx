import React, { useState } from "react";
import "./Slider.css";
import blackHeadphones from "../../assets/black-headphones.jpg";
import brownHeadphones from "../../assets/lay-photography.jpg";
import blackWirelessHeadphones from "../../assets/black-wireless-headphones.jpg";
import microphone from "../../assets/microphone.jpg";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    blackHeadphones,
    brownHeadphones,
    blackWirelessHeadphones,
    microphone,
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-slider">
      <button className="prev" onClick={prevSlide}>
        ❮
      </button>
      {images.map((image, index) => (
        <div
          key={index}
          className={index === currentIndex ? "slide active" : "slide"}
          style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
        >
          <div
            className="content"
            style={{
              float: "right",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              marginRight: "150px",
              marginTop: "200px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <p style={{ color: "orange", fontSize: 25, margin: "3px" }}>
                Special Discount
              </p>
              <p
                style={{
                  fontSize: 60,
                  fontWeight: "200",
                  color: "white",
                  margin: "3px",
                }}
              >
                Latest Audio Systems
              </p>
              <p
                style={{
                  fontSize: 45,
                  fontWeight: "700",
                  marginBottom: "20px",
                  color: "white",
                  margin: "3px",
                }}
              >
                Offer 20% off
              </p>

              <button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  fontSize: 14,
                  fontWeight: "500",
                  border: "none",
                  padding: " 15px 25px",
                  borderRadius: "4px",
                  marginTop: "15px",
                }}
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      ))}
      <button className="next" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default Slider;
