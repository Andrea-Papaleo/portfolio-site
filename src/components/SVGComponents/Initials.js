import React from "react";

const strokeWidth = 8;
const Initials = ({ sideLength, className, primaryColor, secondaryColor }) => {
  return (
    <svg
      viewBox="-50 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      width={sideLength}
      height={sideLength}
      className={className}
    >
      <path
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        d="M0 70 L10 70"
      />
      <path stroke={primaryColor} strokeWidth={strokeWidth} d="M0 0 L0 100" />
      <path
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        d="M-20 40 L0 40"
      />
      <path stroke={primaryColor} strokeWidth={strokeWidth} d="M-35 70 L0 1" />

      <path
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        d="M0 40 L10 40"
      />
      <path
        stroke={secondaryColor}
        strokeWidth={strokeWidth}
        fill="none"
        d="M10 40 C 40 42, 40 68 10 70"
      />
    </svg>
  );
};

export default Initials;
