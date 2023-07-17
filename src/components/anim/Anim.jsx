import React from "react";
import "./style/AnimStyle.scss";
function Anim() {
  return (
    <div className="-t-anim-con">
      <svg
        width="200"
        height="120"
        viewBox="0 0 163 152"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="anime-1">
          <circle
            id="top"
            cx="81"
            cy="68"
            r="38"
            fill="url(#paint0_linear_10_7)"
          />
          <rect
            id="under"
            y="81"
            width="163"
            height="71"
            rx="35.5"
            fill="url(#paint1_linear_10_7)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_10_7"
            x1="81"
            y1="0"
            x2="81"
            y2="76"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#BB93FD" />
            <stop offset="1" stop-color="#FFC9B8" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_10_7"
            x1="16.6165"
            y1="88.1"
            x2="159.75"
            y2="135.69"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#ABFFF0" />
            <stop offset="1" stop-color="#C5BCFD" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Anim;
