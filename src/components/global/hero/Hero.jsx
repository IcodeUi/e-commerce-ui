import React from "react";
import "../style/Hero.scss";
function Hero() {
  return (
    <div className="-h-hero-container">
      <div className="--t-content">
        <div className="-t-head text-center flex gap-1 flex-col">
          <h1 className="one capitalize">
            shop anytime, <br /> anywhere
          </h1>
          <p className="text-center capitalize">
            and enjoy buying our quality products.
          </p>
        </div>
        <button className="-t-shop-btn  capitalize">shop now</button>
      </div>
    </div>
  );
}

export default Hero;
