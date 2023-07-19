import React from "react";
import "../style/FooterStyle.scss";
import { SocialLink } from "../../../constant/FooterData";
import { Link } from "react-router-dom";
import About from "../../custom/about/about";
import Policy from "../../custom/policy/Policy";
function Footer() {
  console.log(SocialLink);
  const GetTime = new Date().getFullYear();
  return (
    <div className="-t-footer-container">
      <div className="-t-footer-content">
        <div className="-t-h-top-con gap-2 ">
          <Link to="/" className="text-[1.2em]  font-semibold">
            temilla.com
          </Link>
          <div className="-t-f-link   gap-2">
            <Link to="/shop" className="text-sm font-[300]">
              shop
            </Link>
            <About />
            <Policy />
          </div>
          <li className="list-none flex gap-4 -t-list-s  ">
            {SocialLink.map((link) => (
              <Link key={link._id} to={link.url}>
                {link.icon}
              </Link>
            ))}
          </li>
        </div>
        <hr className="w-full h-full bg-[#eaeaea] mt-4" />
        <div className="-t-footer-  ">
          <small className="capitalize">
            &copy; {GetTime} temilla.com. All rights reserved
          </small>
          <span className="capitalize text-sm gap-2 flex items-center ">
            <small className="">powered by </small>
            <a
              href="https://www.icondethisnoe.com"
              className=" font-bold text-[#D0A4E3]"
            >
              iCodethisnow.com
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
