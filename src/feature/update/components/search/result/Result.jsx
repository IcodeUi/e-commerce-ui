import React from "react";
import "../style/resultstyle.scss";
import { Link, useParams } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
function Result() {
  const { id } = useParams();
  return (
    <div className="-t-result">
      <div className="--grid">
        <Link className='w-full' to={`/shop/${id}`}>
          <div className="-t-link-g">
            <span className="-t-icon  text-[#6e6e6e]">
              <AiOutlineSearch size={18} />
            </span>
            <p className="bold text-sm capitalize text-[#999]">
              samsung ultra 23
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Result;
