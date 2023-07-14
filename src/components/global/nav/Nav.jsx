import React, { useState } from "react";
import "../style/NavStyle.scss";
import Logo from "../logo/Logo";
import SearchN from "../../custom/search/SearchN";
import { Link } from "react-router-dom";
import BagBtn from "../../custom/type/BagBtn";
import SearchComponent from "../../../feature/update/components/search/Search";
function Nav() {
  const [search, setSearch] = useState(false);
  //
  const handleSearch = () => {
    setSearch(!search);
  };
  console.log(search);
  return (
    <>
      <header className="--t-header-">
        <nav className="--t-nav-con">
          <Logo />
          <div className="--t-menu pr-4 ">
            <ul className="flex items-center  gap-5">
              <SearchN handleSearch={handleSearch} />
              <li className="list-none capitalize">
                <Link to="/shop">shop</Link>
              </li>
              <BagBtn />
            </ul>
          </div>
        </nav>
      </header>
      {search && <SearchComponent />}
    </>
  );
}

export default Nav;
