import React from "react";

const Logo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="54"
    viewBox="0 0 100 100"
    {...props}
  >
    <path
      fill="#F29C1F"
      fillRule="evenodd"
      d="M80 100L56 0H44L20 100h13l17-73.914L67 100z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#ECF0F1"
      fillRule="evenodd"
      d="M0 10h100v62H0V10z"
      clipRule="evenodd"
    ></path>
    <path
      fill="none"
      stroke="#E64C3C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="4"
      d="m10 61l13.024-13.024L29 53l16.988-16.012L55 46l15-15l5 5l15-15"
      clipRule="evenodd"
    ></path>
    <path
      fill="#E57E25"
      fillRule="evenodd"
      d="M73.28 72H60.56l.46 2h12.74zm-47.04 2h12.74l.46-2H26.72z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default Logo;
