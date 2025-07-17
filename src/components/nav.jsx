import React from "react";
import Avatar from "./avatar";
import { Link } from "react-router-dom";
import Logo from "./logo";

const Navbar = () => {
  return (
    <>
      <div className="bg-white p-2 border-2 border-gray-200">
        <nav className="flex justify-between items-center">
          <div className="flex items-center flex-1">
            <Logo />
          </div>
          <ul className="flex items-center space-x-8 mr-4">
            <Link to={"/signup"}>
              <button className="py-1.5 px-7 border-black border-2 cursor-pointer">
                Register
              </button>
            </Link>
            <Link to={"/login"}>
              <button className="py-1.5 px-7 border-2 border-black cursor-pointer">
                Login
              </button>
            </Link>
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
