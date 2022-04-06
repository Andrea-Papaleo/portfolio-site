import React, { useState } from "react";
import { colors } from "../../utilities";

const Logo = ({ sideLength, className, strokeColor }) => {
  const [animate, setAnimate] = useState(false);

  const handleMouseEnter = () => {
    setAnimate(true);
  };
  const handleMouseLeave = () => {
    setAnimate(false);
  };
  return (
    <svg
      viewBox="50 30 200 180"
      xmlns="http://www.w3.org/2000/svg"
      width={sideLength}
      height={sideLength}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <circle
        cx="150"
        cy="50"
        r="15"
        stroke={strokeColor}
        strokeWidth="4"
        fill="none"
      >
        {animate && (
          <>
            <animate
              attributeName="cx"
              from="150"
              to="150"
              dur="2s"
              values="150; 151; 150; 149; 150"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              from="50"
              to="50"
              dur="2s"
              values="50; 51; 50; 49; 50"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              begin="0.5s"
              repeatCount="indefinite"
            />
          </>
        )}
      </circle>
      <circle
        cx="150"
        cy="65"
        r="15"
        stroke={strokeColor}
        strokeWidth="4"
        fill="none"
      >
        {animate && (
          <>
            <animate
              attributeName="cx"
              from="150"
              to="150"
              dur="2s"
              values="150; 151; 150; 149; 150"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              from="65"
              to="65"
              dur="2s"
              values="65; 66; 65; 64; 65"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              begin="0.1s"
              repeatCount="indefinite"
            />
          </>
        )}
      </circle>
      <circle
        cx="75"
        cy="80"
        r="15"
        stroke={strokeColor}
        strokeWidth="4"
        fill="none"
      >
        {animate && (
          <>
            <animate
              attributeName="cx"
              from="75"
              to="75"
              dur="2s"
              values="75; 76; 75; 74; 75"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              begin="0.25s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              from="80"
              to="80"
              dur="2s"
              values="80; 81; 80; 79; 80"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              begin="0.7s"
              repeatCount="indefinite"
            />
          </>
        )}
      </circle>
      <circle
        cx="75"
        cy="95"
        r="15"
        stroke={strokeColor}
        strokeWidth="4"
        fill="none"
      >
        {animate && (
          <>
            <animate
              attributeName="cx"
              from="75"
              to="75"
              dur="2s"
              values="75; 76; 75; 74; 75"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              begin="0.25s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              from="95"
              to="95"
              dur="2s"
              values="95; 96; 95; 94; 95"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              begin="0.5s"
              repeatCount="indefinite"
            />
          </>
        )}
      </circle>
      <circle
        cx="225"
        cy="80"
        r="15"
        stroke={strokeColor}
        strokeWidth="4"
        fill="none"
      >
        {animate && (
          <>
            <animate
              attributeName="cx"
              from="225"
              to="225"
              dur="2s"
              values="225; 226; 225; 224; 225"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              begin="0.75s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              from="80"
              to="80"
              dur="2s"
              values="80; 81; 80; 79; 80"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              begin="0.5s"
              repeatCount="indefinite"
            />
          </>
        )}
      </circle>
      <circle
        cx="225"
        cy="95"
        r="15"
        stroke={strokeColor}
        strokeWidth="4"
        fill="none"
      >
        {animate && (
          <>
            <animate
              attributeName="cx"
              from="225"
              to="225"
              dur="2s"
              values="225; 226; 225; 224; 225"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              begin="0.75s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              from="95"
              to="95"
              dur="2s"
              values="95; 96; 95; 94; 95"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              begin="0.9s"
              repeatCount="indefinite"
            />
          </>
        )}
      </circle>
      <circle
        cx="150"
        cy="110"
        r="15"
        stroke={strokeColor}
        strokeWidth="4"
        fill="none"
      >
        {animate && (
          <>
            <animate
              attributeName="cx"
              from="150"
              to="150"
              dur="2s"
              values="150; 151; 150; 149; 150"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              begin="1.25s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              from="110"
              to="110"
              dur="2s"
              values="110; 111; 110; 109; 110"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              begin="0.5s"
              repeatCount="indefinite"
            />
          </>
        )}
      </circle>
      <circle
        cx="150"
        cy="125"
        r="15"
        stroke={strokeColor}
        strokeWidth="4"
        fill="none"
      >
        {animate && (
          <>
            <animate
              attributeName="cx"
              from="150"
              to="150"
              dur="2s"
              values="150; 151; 150; 149; 150"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              begin="1.25s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              from="125"
              to="125"
              dur="2s"
              values="125; 126; 125; 124; 125"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              begin="1.2s"
              repeatCount="indefinite"
            />
          </>
        )}
      </circle>
      <circle
        cx="75"
        cy="140"
        r="15"
        stroke={strokeColor}
        strokeWidth="4"
        fill="none"
      >
        {animate && (
          <>
            <animate
              attributeName="cx"
              from="75"
              to="75"
              dur="2s"
              values="75; 76; 75; 74; 75"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              from="140"
              to="140"
              dur="2s"
              values="140; 141; 140; 139; 140"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              begin="0.5s"
              repeatCount="indefinite"
            />
          </>
        )}
      </circle>
      <circle
        cx="75"
        cy="155"
        r="15"
        stroke={strokeColor}
        strokeWidth="4"
        fill="none"
      >
        {animate && (
          <>
            {" "}
            <animate
              attributeName="cx"
              from="75"
              to="75"
              dur="2s"
              values="75; 76; 75; 74; 75"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              from="155"
              to="155"
              dur="2s"
              values="155; 154; 155; 156; 155"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              begin="0.5s"
              repeatCount="indefinite"
            />
          </>
        )}
      </circle>
      <circle
        cx="225"
        cy="140"
        r="15"
        stroke={strokeColor}
        strokeWidth="4"
        fill="none"
      >
        {animate && (
          <>
            {" "}
            <animate
              attributeName="cx"
              from="225"
              to="225"
              dur="2s"
              values="225; 226; 225; 224; 225"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              begin="0.75s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              from="140"
              to="140"
              dur="2s"
              values="140; 141; 140; 139; 140"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              begin="0.5s"
              repeatCount="indefinite"
            />
          </>
        )}
      </circle>
      <circle
        cx="225"
        cy="155"
        r="15"
        stroke={strokeColor}
        strokeWidth="4"
        fill="none"
      >
        {animate && (
          <>
            <animate
              attributeName="cx"
              from="225"
              to="225"
              dur="2s"
              values="225; 226; 225; 224; 225"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              begin="0.75s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              from="155"
              to="155"
              dur="2s"
              values="155; 154; 155; 156; 155"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              begin="0.5s"
              repeatCount="indefinite"
            />
          </>
        )}
      </circle>
      <circle
        cx="150"
        cy="170"
        r="15"
        stroke={strokeColor}
        strokeWidth="4"
        fill="none"
      >
        {animate && (
          <>
            {" "}
            <animate
              attributeName="cx"
              from="150"
              to="150"
              dur="2s"
              values="150; 151; 150; 149; 150"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              begin="1.25s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              from="170"
              to="170"
              dur="2s"
              values="170; 171; 170; 169; 170"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              begin="0.5s"
              repeatCount="indefinite"
            />
          </>
        )}
      </circle>
      <circle
        cx="150"
        cy="185"
        r="15"
        stroke={strokeColor}
        strokeWidth="4"
        fill="none"
      >
        {animate && (
          <>
            {" "}
            <animate
              attributeName="cx"
              from="150"
              to="150"
              dur="2s"
              values="150; 151; 150; 149; 150"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              begin="1.25s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              from="185"
              to="185"
              dur="2s"
              values="185; 186; 185; 184; 185"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              begin="1.7s"
              repeatCount="indefinite"
            />
          </>
        )}
      </circle>
    </svg>
  );
};

export default Logo;
