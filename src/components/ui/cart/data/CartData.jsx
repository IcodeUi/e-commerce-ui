import React from "react";
import "./CartDataStyle.scss";
import not from "../../../../assets/img/cartnotfound.png";
import { FaTrash } from "react-icons/fa";
function CartData() {
  return (
    <div className="-t-container">
       <div className="-info-head capitalize">
          <span>total item(3)</span>
           <button className="-clear-btn-c capitalize">clear cart</button>
       </div>
       <hr className="w-full h-full bg-black mt-2" />
      <div className="-t-body-container">
        <div className="-t-body-c">
          <div className="-img-box">
            <img src={not} alt="" />
          </div>
          <div className="-t-data">
            <small className="text-black capitalize">samsung s22 ultra</small>
            <p className="font-bold">$990</p>
          </div>
        </div>
        <span className="text-[#ff0000] t-trash">
          <FaTrash />
        </span>
      </div>
    </div>
  );
}

export default CartData;
