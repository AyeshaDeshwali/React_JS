import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img
              src="https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/512/Waving-Hand-3d-Default-icon.png"
              alt=""
            />
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div style={{ marginLeft: "20px" }}>Letest Collection</div>
          <img
            src="https://www.pngall.com/wp-content/uploads/13/White-Arrow-PNG-Pic.png"
            style={{ width: "100px", marginRight: "-22px" }}
            alt=""
          />
        </div>
      </div>
      <div className="hero-right">
        <img
          style={{ width: "480px", height: "480px", marginTop: "-100px" }}
          src="https://clipart-library.com/image_gallery2/Shopping-Download-PNG.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
