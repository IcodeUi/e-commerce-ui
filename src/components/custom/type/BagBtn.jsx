import React from "react";
import "../style/BagBtn.scss";
import { BsHandbag } from "react-icons/bs";

function BagBtn() {
  const QTY = 0;
  return (
    <div className=" -t-bag-Q cursor-pointer">
      <BsHandbag size={24} />
      <span className="-t-QTY">{QTY}</span>
    </div>
  );
}

export default BagBtn;
