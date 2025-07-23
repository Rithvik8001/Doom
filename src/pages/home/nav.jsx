import React, { useState, useRef, useEffect } from "react";
import Avatar from "../ui/avatar";
import { Link } from "react-router-dom";
import Logo from "../ui/logo";
import { Menu, X, User, LogOut } from "lucide-react";
import { useSelector } from "react-redux";
import useLogout from "../../hooks/useLogout";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const popoverRef = useRef(null);
  const user = useSelector((state) => state.user);
  const { logout, error } = useLogout();

  const handleLogout = async () => {
    setPopoverOpen(false);
    setMenuOpen(false);
    await logout();
  };

  const handleProfileClick = () => {
    setPopoverOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setPopoverOpen(false);
      }
    };

    if (popoverOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popoverOpen]);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setPopoverOpen(false);
      }
    };

    if (popoverOpen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [popoverOpen]);

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
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="cursor-pointer" size={32} strokeWidth={2.5} />
            ) : (
              <Menu className="cursor-pointer" size={32} strokeWidth={2.5} />
            )}
          </button>
        </div>
        <ul className="hidden sm:flex flex-row items-center gap-3 w-full sm:w-auto justify-end">
          {user ? (
            <li className="ml-2 relative">
              <button
                className="rounded-full focus:outline-none focus:ring-2 focus:ring-black/30"
                onClick={() => setPopoverOpen(!popoverOpen)}
                aria-label="Open profile menu"
              >
                <Avatar
                  className="cursor-pointer"
                  alt={"avatar"}
                  src={user?.photoUrl || "https://github.com/evilrabbit.png"}
                  size="small"
                />
              </button>

              {popoverOpen && (
                <div
                  ref={popoverRef}
                  className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50 animate-in fade-in-0 zoom-in-95"
                  style={{
                    animationDuration: "150ms",
                    transformOrigin: "top right",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
                    <Avatar
                      className="h-12 w-12"
                      alt={"avatar"}
                      src={
                        user?.photoUrl || "https://github.com/evilrabbit.png"
                      }
                      size="large"
                    />
                    <div className="flex flex-col">
                      <h3 className="font-semibold text-sm text-gray-900">
                        {user?.firstName || "User"}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {user?.emailId || "No email"}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <button
                      className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 transition-colors cursor-pointer w-full text-left text-sm"
                      onClick={handleProfileClick}
                    >
                      <User className="h-4 w-4 text-gray-600" />
                      <span className="text-gray-700">Profile</span>
                    </button>

                    <button
                      className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 transition-colors cursor-pointer w-full text-left text-sm"
                      onClick={handleLogout}
                    >
                      <LogOut className="h-4 w-4 text-gray-600" />
                      <span className="text-gray-700">Logout</span>
                    </button>
                    {error && (
                      <div
                        style={{
                          color: "red",
                          fontSize: "0.9em",
                          marginTop: 8,
                        }}
                      >
                        {error}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </li>
          ) : (
            <>
              <div className="flex flex-row items-center gap-2">
                <li className="ml-2">
                  <Link to="/signup">
                    <button className="bg-black text-white px-6 py-2 hover:bg-gray-900 transition-colors flex items-center justify-center shadow-sm focus:outline-none focus:ring-2 focus:ring-black/30 cursor-pointer">
                      Sign Up
                    </button>
                  </Link>
                </li>
                <li className="ml-2">
                  <Link to="/login">
                    <button className="bg-black text-white px-6 py-2 hover:bg-gray-900 transition-colors flex items-center justify-center shadow-sm focus:outline-none focus:ring-2 focus:ring-black/30 cursor-pointer">
                      Log In
                    </button>
                  </Link>
                </li>
              </div>
            </>
          )}
        </ul>

        {menuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center w-screen h-screen px-4">
            <ul className="flex flex-col items-center gap-8 text-2xl font-semibold w-full max-w-xs">
              {user ? (
                <li className="w-full flex justify-center mt-4">
                  <div className="flex flex-col items-center gap-4">
                    <Avatar
                      alt={"avatar"}
                      src={
                        user?.photoUrl || "https://github.com/evilrabbit.png"
                      }
                      size="large"
                    />
                    <div className="flex flex-col gap-4 w-full">
                      <button
                        className="flex items-center justify-center gap-2 p-3 rounded-md hover:bg-gray-100 transition-colors"
                        onClick={() => {
                          handleProfileClick();
                          setMenuOpen(false);
                        }}
                      >
                        <User className="h-5 w-5" />
                        <span>Profile</span>
                      </button>
                      <button
                        className="flex items-center justify-center gap-2 p-3 rounded-md hover:bg-gray-100 transition-colors"
                        onClick={handleLogout}
                      >
                        <LogOut className="h-5 w-5" />
                        <span>Logout</span>
                      </button>
                      {error && (
                        <div
                          style={{
                            color: "red",
                            fontSize: "0.9em",
                            marginTop: 8,
                          }}
                        >
                          {error}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ) : (
                <>
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
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
