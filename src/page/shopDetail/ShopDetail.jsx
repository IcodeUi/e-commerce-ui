import React from "react";
import DetailPage from "../../components/ui/ShopDetail/ShopDetail";
import { Link } from "react-router-dom";
import "../style/ShopDetail.scss";
import { MdArrowBackIosNew } from "react-icons/md";
function ShopeDetail() {
  return (
    <>
      <div className="w-full -s-p-">
        <DetailPage />
      </div>
      <div className="-t-back-shop-">
        <Link to="/shop">
          <MdArrowBackIosNew size={22} />
        </Link>
      </div>
    </>
  );
}

export default ShopeDetail;
