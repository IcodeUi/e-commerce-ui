import React from "react";
import "../style/DetailPage.scss";
import { useParams } from "react-router-dom";
import { ProductData } from "../../../constant/ProductData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Status from "./status/Status";
import Description from "./decription/Description";
function ShopDetail() {
  const params = useParams();
  const product = ProductData.find((item) => item.id === parseInt(params.id));
  return (
    <div className="-t-detail-page-container">
      <div className="-t-detail-product-content">
        <div className="-t-image-container">
          <LazyLoadImage
            src={product.img}
            alt="detail product img"
            loading="lazy"
          />
        </div>
        <div className="-t-product-body">
          <h3 className="capitalize text-[1.4em] font-semibold">{product.name}</h3>
          <p className="font-semibold text-[1.2em]">
            <small className="font-light">Price:</small> ${product.price}
          </p>
          <Description product={product} />
          <Status product={product} />
        </div>
      </div>
    </div>
  );
}

export default ShopDetail;
