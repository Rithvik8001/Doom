import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-2 sm:px-4 text-center w-full">
      <div className="space-y-6 w-full max-w-2xl mx-auto">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
          The platform for developer connections
        </h1>
        <p className="text-base xs:text-lg sm:text-xl text-gray-600 tracking-tight">
          Connect with fellow developers, share knowledge, and build amazing
          projects together. The modern way to network in tech.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-3 mt-4">
          <Link to="/signup" className="w-full sm:w-auto">
            <button className="bg-black text-white px-6 py-3 w-full sm:w-auto font-medium hover:bg-gray-900 transition-colors flex items-center justify-center shadow-md focus:outline-none focus:ring-2 focus:ring-black/30 text-base sm:text-lg cursor-pointer">
              <span>Get Started</span>
              <ArrowRight size={18} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
