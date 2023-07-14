import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../style/SearchN.scss";
function SearchN({ handleSearch }) {
  return (
    <div className="-t-search-n" onClick={handleSearch}>
      <label className="icon text-[#888] pr-1">
        <AiOutlineSearch size={20} />
      </label>
      <span className="text-sm capitalize text-[#999]">search</span>
    </div>
  );
}

export default SearchN;
