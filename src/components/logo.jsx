import React from "react";

// Logo: Modern checkmark in a square, fits productivity/commit/goal-tracking context
const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 44}
    height={props.height || 44}
    viewBox="0 0 48 48"
    fill="none"
    {...props}
  >
    {/* Background square with rounded corners */}
    <rect
      x="2"
      y="2"
      width="44"
      height="44"
      rx="12"
      fill="#fff"
      stroke="#222"
      strokeWidth="3"
    />
    {/* Bold checkmark */}
    <path
      d="M14 25l7 7 13-13"
      stroke="#a259ff"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export default Logo;
