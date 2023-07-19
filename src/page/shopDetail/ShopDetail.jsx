import React from "react";
import DetailPage from "../../components/ui/ShopDetail/ShopDetail";
import { Link } from "react-router-dom";
import "../style/ShopDetail.scss";
import { MdArrowBackIosNew } from "react-icons/md";
import YouMayLike from "../../components/ui/ShopDetail/umayLike/YoumayLike";
function ShopeDetail() {
  return (
    <>
      <div className="w-full h-auto -s-p-">
        <DetailPage />
        <YouMayLike/>
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
