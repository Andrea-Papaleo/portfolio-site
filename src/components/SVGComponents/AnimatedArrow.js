import React from "react";
import "./AnimatedArrow.css";

const AnimatedArrow = ({ className, sideLength, strokeColor }) => {
  return (
    <svg
      viewBox="-50 0 100 50"
      xmlns="http://www.w3.org/2000/svg"
      width={sideLength}
      height={sideLength}
      className={className}
    >
      <path
        stroke={strokeColor}
        strokeWidth="5"
        className="arrow--tail"
        d="M0 0 L0 45 "
      />
      <path
        stroke={strokeColor}
        strokeWidth="5"
        className=" arrow--head arrow--head--left"
        d="M-20 28 L1.5 45"
      />
      <path
        stroke={strokeColor}
        strokeWidth="5"
        className="arrow--head arrow--head--right"
        d="M20 28 L-1.5 45"
      />
    </svg>
  );
};

export default AnimatedArrow;
