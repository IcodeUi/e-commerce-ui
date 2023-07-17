import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
function Description({ product }) {
  const [description, setDescription] = useState(false);
  const handleDesc = () => {
    setDescription(!description);
  };
  return (
    <div className="-t-desc-detail mt-2 flex-col flex  gap-1">
      <div
        className="cursor-pointer  w-0 flex items-center gap-1"
        onClick={handleDesc}
      >
        <small className="text-[1.2em] capitalize font-semibold">
          description
        </small>
        {description ? (
          <i className="text-[#000000] font-semibold">
            <IoIosArrowUp size={19} />
          </i>
        ) : (
          <i className="text-[#000000] font-semibold">
            <IoIosArrowDown size={19} />
          </i>
        )}
      </div>
      {description && (
        <motion.div
          initial={{
            opacity: 0,
            z: -50,
          }}
          animate={{
            opacity: 1,
            z: 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <p className="text-[.8em] transition-all capitalize text-gray-600">
            {product.desc}
          </p>
        </motion.div>
      )}
    </div>
  );
}

export default Description;
