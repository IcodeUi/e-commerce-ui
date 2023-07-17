import React from "react";
import "../style/FP.scss";
import { ProductData } from "../../../../constant/ProductData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
function FP() {
  return (
    <div className="-t-fp-container">
      <div className="-head mb-4">
        <h2>Feature Products</h2>
      </div>
      <div className="-t-grid-container">
        {ProductData.slice(0,8).map((shop) => {
          return (
            <div className="-t-shop-card" key={shop.id}>
              <Link to={`/shop/${shop.id}`}>
                <div className="-t-img-box">
                  <LazyLoadImage
                    src={shop.img}
                    alt="product img"
                    crossOrigin="anonymous"
                    loading="lazy"
                  />
                </div>
                <div className="-t-body">
                  <h3 className="capitalize">{shop.name} </h3>
                  <p className="font-bold">${shop.price}</p>
                </div>
              </Link>
              {shop.status === 0 && (
                <div className="-t-stock">
                  <button disabled={shop.status === 0} className="capitalize">
                    sold Out
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FP;
