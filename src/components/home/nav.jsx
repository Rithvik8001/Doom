import React, { useState } from "react";
import Avatar from "../ui/avatar";
import { Link } from "react-router-dom";
import Logo from "../ui/logo";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <header className="mx-2 border border-black bg-white/80 backdrop-blur-2xl sticky top-0 z-50 mt-4 px-2 py-2 sm:px-6 sm:py-4">
      <nav className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 relative w-full">
        <div className="flex items-center w-full sm:w-auto justify-between">
          <div className="flex items-center">
            <Logo width={36} height={36} />
            <Link to={"/"}>
              <span className="ml-2 text-xl sm:text-2xl font-bold tracking-tight text-black select-none cursor-pointer">
                Doom
              </span>
            </Link>
          </div>
          <button
            className="sm:hidden ml-auto p-2 focus:outline-none z-50 rounded-md hover:bg-gray-100 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <X className="cursor-pointer" size={32} strokeWidth={2.5} />
            ) : (
              <Menu className="cursor-pointer" size={32} strokeWidth={2.5} />
            )}
          </button>
        </div>
        <ul className="hidden sm:flex flex-row items-center gap-3 w-full sm:w-auto justify-end">
          <li>
            <Link to="/signup">
              <button className="bg-black text-white px-6 py-2 hover:bg-gray-900 transition-colors flex items-center justify-center shadow-sm focus:outline-none focus:ring-2 focus:ring-black/30 cursor-pointer">
                Sign Up
              </button>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <button className="bg-white text-black border border-black px-6 py-2 font-medium hover:bg-gray-100 transition-colors flex items-center justify-center shadow-sm focus:outline-none focus:ring-2 focus:ring-black/30 cursor-pointer">
                Log In
              </button>
            </Link>
          </li>
          <li className="ml-2">
            <Avatar
              alt={"avatar"}
              src={"https://github.com/evilrabbit.png"}
              size="small"
            />
          </li>
        </ul>

        {menuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center w-screen h-screen px-4">
            <ul className="flex flex-col items-center gap-8 text-2xl font-semibold w-full max-w-xs">
              <li className="w-full">
                <Link to="/signup">
                  <button className="bg-black text-white border border-black px-6 py-2 font-medium hover:bg-gray-700 transition-colors flex items-center justify-center shadow-sm focus:outline-none focus:ring-2 focus:ring-black/30 cursor-pointer w-full">
                    Sign Up
                  </button>
                </Link>
              </li>
              <li className="w-full">
                <Link to="/login">
                  <button className="bg-white text-black border border-black px-6 py-2 font-medium hover:bg-gray-100 transition-colors flex items-center justify-center shadow-sm focus:outline-none focus:ring-2 focus:ring-black/30 cursor-pointer w-full">
                    Log In
                  </button>
                </Link>
              </li>
              <li className="w-full flex justify-center mt-4">
                <Avatar
                  alt={"avatar"}
                  src={"https://github.com/evilrabbit.png"}
                  size="large"
                />
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
