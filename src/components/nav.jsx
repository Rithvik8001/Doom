import React from "react";
import icon from "../assets/icon.svg";
import Avatar from "./avatar";

const Navbar = () => {
  return (
    <>
      <div className="bg-white p-2 border-3 border-black">
        <nav className="flex justify-between items-center">
          <div className="flex items-center flex-1">
            <img width={44} height={54} src={icon} alt="icon" />
            <h1 className="tracking-tighter font-medium text-4xl ml-2">Doom</h1>
          </div>
          <ul className="flex items-center space-x-8 mr-4">
            <li className="hover:text-gray-600 transition-colors cursor-pointer">
              Home
            </li>
            <li className="hover:text-gray-600 transition-colors cursor-pointer">
              About
            </li>
            <li className="hover:text-gray-600 transition-colors cursor-pointer">
              Sign up
            </li>
            <li>
              <Avatar
                alt={"avatar"}
                src={"https://github.com/evilrabbit.png"}
                size="small"
              />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
