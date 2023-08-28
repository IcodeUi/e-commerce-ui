import React, { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../style/SearchN.scss";
import PropTypes from "prop-types";
function SearchN({ handleSearch }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.metaKey && e.key === "k") {
        handleSearch();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleSearch]);
  return (
    <div className="-t-search-n" onClick={handleSearch}>
      <label className="icon text-[#2a2a2a] pr-1">
        <AiOutlineSearch size={20} />
      </label>
      <span className="text-[.799em] capitalize text-[#606060]">
        i'm looking for ...
      </span>
      <div className="-t-ctrl-k ">
        <span className="text-md">⌘ K</span>
      </div>
    </div>
  );
}

SearchN.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
export default SearchN;
