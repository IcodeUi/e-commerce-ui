import React, { useState, useEffect } from "react";
import "../style/NavStyle.scss";
import Logo from "../logo/Logo";
import SearchN from "../../custom/search/SearchN";
import { Link } from "react-router-dom";
import BagBtn from "../../custom/type/BagBtn";
import SearchComponent from "../../../feature/update/components/search/Search";
import { AiOutlineSearch } from "react-icons/ai";
import Cart from "../../ui/cart/Cart";
function Nav() {
  const [search, setSearch] = useState(false);
  const [cart, setCart] = useState(false);
  const [isOpen, setOpen] = useState(false);
  //
  const handleSearch = () => {
    setSearch(!search);
  };
  const handleCart = () => {
    setCart(!cart);
  };

  useEffect(() => {
    const handleOpen = () => {
      if (window.scrollY > 0) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleOpen);

    return () => {
      window.removeEventListener("scroll", handleOpen);
    };
  }, []);

  return (
    <>
      <header className={isOpen ? " --t-header- NavActive" : "--t-header-"}>
        <nav className="--t-nav-con">
          <Logo />
          <div className={"--t-menu pr-4 "}>
            <ul className="flex items-center ">
              <span
                className="--t-search cursor-pointer"
                onClick={handleSearch}
              >
                <AiOutlineSearch size={21} />
              </span>
              <SearchN handleSearch={handleSearch} />
              <li className="list-none capitalize">
                <Link to="/shop">shop</Link>
              </li>
              <BagBtn handleCart={handleCart} />
            </ul>
          </div>
        </nav>
      </header>
      {search && <SearchComponent handleSearch={handleSearch} />}
      {cart && <Cart handleCart={handleCart} cart={cart} />}
    </>
  );
}

export default Nav;
