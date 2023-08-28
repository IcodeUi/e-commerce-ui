import React from "react";

function OnClick({ BackSlide, NextSlide }) {
  return (
    <div className=" absolute justify-between w-full px-3   items-center flex   z-50  gap-3 ">
      <button onClick={BackSlide} className="px-3">
        b
      </button>
      <button onClick={NextSlide} className="px-3">
        n
      </button>
    </div>
  );
}

export default OnClick;
