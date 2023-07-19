import React from "react";
import "./status.scss";
function Status({ product }) {
  return (
    <div className="-t-stock-status">
      <div className="-t-in-out font-light flex justify-between items-center">
        <small className="capitalize">Status:</small>
        {product.status === 0 ? (
          <span className="out capitalize text-red-500 font-medium">
            Out of Stock
          </span>
        ) : (
          <span className="in capitalize text-green-500 font-bold">
            In Stock
          </span>
        )}
      </div>

      <div className="-t-qty-list pt-3  flex items-center justify-between">
        <small className="capitalize  font-light">select Qty:</small>
        <select name="" id="" className="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <div className="t-total-price flex items-center justify-between mt-4  gap-2">
        <small className="font-light capitalize">total price:</small>
        <h3 className="font-bold text-[1.5em] underline">${product.price}</h3>
      </div>

      <div className="-t-s-btn-con w-full mt-8">
        <button
          disabled={product.status === 0}
          className={"capitalize w-full py-3"}
          style={{ cursor: product.status === 0 ? "not-allowed" : "pointer" }}
        >
          {product.status === 0 ? "out of stock" : "add to cart"}
        </button>
      </div>
    </div>
  );
}

export default Status;
