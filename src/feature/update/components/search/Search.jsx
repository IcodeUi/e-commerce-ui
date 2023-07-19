import React, { useState, useEffect } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import Result from "./result/Result";
import axios from "axios";
import "./style/SearchStyle.scss";

function Search({ handleSearch }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelReq = false;
    const fetchApi = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://techmarts.shop/v1/product");
        if (!cancelReq) {
          setData(res.data);
          setFilteredData(res.data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
    return () => {
      cancelReq = true;
    };
  }, []);
  const removerText = () => {
    setSearchValue("");
  };

  useEffect(() => {
    const filterData = () => {
      if (searchValue === "") {
        setFilteredData(data);
      } else {
        const resultData = data.filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredData(resultData);
      }
    };

    const debounce = setTimeout(() => {
      filterData();
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [searchValue, data]);

  //
  const handleChange = (e) => {
    e.persist();
    setSearchValue(e.target.value);
  };

  return (
    <div className="-t-search-container w-full">
      <div onClick={handleSearch} className="-t-overlay"></div>
      <div className="-t-search-content">
        <div className="-t-f-i-s-container">
          <div className="-t-s-box">
            <input
              type="text"
              value={searchValue}
              placeholder="search for products"
              onChange={handleChange}
            />
            <span className="search-icon">
              <AiOutlineSearch size={20} />
            </span>
            {searchValue.length > 0 && (
              <span
                onClick={removerText}
                className="close-icon-X absolute right-3 items-center cursor-pointer"
              >
                <AiOutlineClose size={20}/>
              </span>
            )}
          </div>
          {searchValue && filteredData && (
            <Result
              data={filteredData}
              error={error}
              isLoading={isLoading}
              searchValue={searchValue}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
