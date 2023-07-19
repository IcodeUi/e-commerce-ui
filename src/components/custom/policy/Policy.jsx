import React, { useState, useRef, useEffect } from "react";
import "../style/Policy.scss";
import { motion } from "framer-motion";
import read from '../../../assets/icon/read.png'
import { AiOutlineClose } from "react-icons/ai";
function Policy() {
  const [policy, setPolicy] = useState(false);
  const handlePolicy = () => {
    setPolicy(!policy);
  };
  const OpRef = useRef();
  useEffect(() => {
    const handleClick = (e) => {
      if (OpRef.current && !OpRef.current.contains(e.target)) {
        setPolicy(false);
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [OpRef]);
  return (
    <div className="-t-policy-menu">
      <span
        onClick={handlePolicy}
        className="text-sm cursor-pointer font-[300]"
      >
        terms and policy
      </span>
      {policy && (
        <motion.div
          className="-t-policy-modal"
          ref={OpRef}
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
          <div className="-t-img-read">
            <img src={read} alt="" />
          </div>
          <span onClick={handlePolicy} className="close cursor-pointer">
            <AiOutlineClose size={20} />
          </span>
          <div className="-t-p-terms">
            <h3 className="sticky capitalize font-semibold">
              TERMS OF SERVICE
            </h3>
            <div className="-t-data">
              <small>
                Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                Doloribus Eligendi Officia Quod! Culpa Aperiam Officiis Et.
                Reprehenderit Eum Nostrum Illum. Lorem, Ipsum Dolor Sit Amet
                Consectetur Adipisicing Elit. Doloribus Eligendi Officia Quod!
                Culpa Aperiam Officiis Et. Reprehenderit Eum Nostrum Illum.
              </small>
            </div>
          </div>
          <div className="-t-p-refund ">
            <h3 className="sticky capitalize font-semibold">REFUND POLICY</h3>
            <div className="-r-data">
              <small>
                Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                Doloribus Eligendi Officia Quod! Culpa Aperiam Officiis Et.
                Reprehenderit Eum Nostrum Illum. Lorem, Ipsum Dolor Sit Amet
                Consectetur Adipisicing Elit. Doloribus Eligendi Officia Quod!
                Culpa Aperiam Officiis Et. Reprehenderit Eum Nostrum Illum.
              </small>
            </div>
          </div>
          <div className="-t-p-privacy">
            <h3 className="sticky capitalize font-semibold ">PRIVACY POLICY</h3>
            <div className="-p-data">
              <small>
                Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                Doloribus Eligendi Officia Quod! Culpa Aperiam Officiis Et.
                Reprehenderit Eum Nostrum Illum. Lorem, Ipsum Dolor Sit Amet
                Consectetur Adipisicing Elit. Doloribus Eligendi Officia Quod!
                Culpa Aperiam Officiis Et. Reprehenderit Eum Nostrum Illum.
              </small>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Policy;
