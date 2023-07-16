import React from "react";
import "./style/SearchStyle.scss";
import { AiOutlineSearch } from "react-icons/ai";
import Result from "./result/Result";
function Search({ handleSearch }) {
  return (
    <div className=" -t-search-container w-full">
      <div onClick={handleSearch} className="-t-overlay"></div>
      <div className="-t-search-content">
        <div className="-t-f-i-s-container">
          <div className="-t-s-box">
            <input type="text" placeholder="search for products" />
            <span className="search-icon">
              <AiOutlineSearch size={20} />
            </span>
          </div>
          <Result />
        </div>
      </div>
    </div>
  );
}

export default Search;
