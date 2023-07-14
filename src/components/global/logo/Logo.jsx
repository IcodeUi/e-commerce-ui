import React from "react";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <div className='w-auto '>
      <span className='capitalize'>
        <Link to="/">temilla</Link>
      </span>
    </div>
  );
}

export default Logo;
