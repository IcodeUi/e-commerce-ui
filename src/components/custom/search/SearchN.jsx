import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../style/SearchN.scss";
function SearchN({ handleSearch }) {
  return (
    <div className="-t-search-n" onClick={handleSearch}>
      <label className="icon text-[#2a2a2a] pr-1">
        <AiOutlineSearch size={20} />
      </label>
      <span className="text-[.799em] capitalize text-[#606060]">i'm looking for ...</span>
      <div className="-t-ctrl-k ">
        <span className="text-sm">Ctrl k</span>
      </div>
    </div>
  );
}

export default SearchN;
