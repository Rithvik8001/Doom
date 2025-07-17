import React from "react";

/**
 * Reusable Button component with square corners, black border, and consistent style.
 * Accepts all native button props and custom className for overrides.
 */
const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`bg-black text-white px-6 py-2 cursor-pointer font-medium hover:bg-gray-800 transition-colors flex items-center space-x-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
