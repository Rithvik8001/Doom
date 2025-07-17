import React from "react";
import Logo from "./logo";
import { Link } from "react-router-dom";
import { ArrowRightSquare } from "lucide-react";

const Header = () => {
  return (
    <>
      <div className="mt-12">
        <div className="flex flex-col justify-center items-center space-y-2">
          <div className="flex space-x-2 items-center justify-center">
            <h1 className="sm:text-6xl text-7xl tracking-tighter font-regular">
              Doom
            </h1>
            <Logo />
          </div>
          <h3 className="text-xl text-gray-500">Your next commit-ment. 💖</h3>
          <Link to={"/register"}>
            <button className="flex py-1.5 px-7 border-black border-2">
              Get Started{" "}
              <span>
                <ArrowRightSquare className="ml-1" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
