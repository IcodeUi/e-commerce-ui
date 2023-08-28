import React from "react";
import "../style/BagBtn.scss";
import { BsHandbag } from "react-icons/bs";
import PropTypes from "prop-types";

function BagBtn({ handleCart }) {
  const QTY = 0;
  return (
    <div className=" -t-bag-Q cursor-pointer" onClick={handleCart}>
      <BsHandbag size={24} />
      <span className="-t-QTY">{QTY}</span>
    </div>
  );
}
BagBtn.propTypes = {
  handleCart: PropTypes.func.isRequired,
};
export default BagBtn;
