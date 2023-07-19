import React, { useState, useEffect, useRef } from "react";
import "../style/About.scss";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { SocialLink } from "../../../constant/FooterData";
function About() {
  const [about, setAbout] = useState(false);
  const handleAbout = () => {
    setAbout(!about);
  };
  const onRef = useRef();
  useEffect(() => {
    const handleClick = (e) => {
      if (onRef.current && !onRef.current.contains(e.target)) {
        setAbout(false);
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [onRef]);
  return (
    <div className="-t-contact-menu">
      <span onClick={handleAbout} className="text-sm cursor-pointer font-[300]">
        about us
      </span>
      {about && (
        <motion.div
          className="-t-con-modal"
          ref={onRef}
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          <span onClick={handleAbout} className="close cursor-pointer">
            <AiOutlineClose size={20} />
          </span>
          <div className="t-data-a">
            <h3>about us</h3>
            <small className="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus eligendi officia quod! Culpa aperiam officiis et.
              Reprehenderit eum nostrum illum.
            </small>
          </div>
          <div className="t-data-c gap-2">
            <h3>contact us</h3>
            <small>
              Email :
              <a className="text-blue-600" href="mailto:info@temilla.com">
                info@temilla.com
              </a>
            </small>
            <small>
              phone : <a href="tel:0922169424">0922169424</a>
            </small>
            <li className="flex mt-1 items-center text gap-4 list-none">
              <small>follow us:</small>
              {SocialLink.map((l) => {
                return (
                  <a key={l._id} href={l.url}>
                    {l.icon}
                  </a>
                );
              })}
            </li>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default About;
