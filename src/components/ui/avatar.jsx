import React from "react";

const Avatar = ({ src, alt, size = "medium", initials }) => {
  const sizeClasses = {
    small: "w-8 h-8 text-sm",
    medium: "w-12 h-12 text-lg",
    large: "w-16 h-16 text-xl",
    xl: "w-24 h-24 text-2xl",
  };

  const selectedSizeClass = sizeClasses[size] || sizeClasses.medium;

  const baseClasses = `
    rounded-full flex items-center justify-center
    bg-gray-200 text-gray-500 font-semibold
    overflow-hidden flex-shrink-0
  `;

  const combinedClasses = `${baseClasses} ${selectedSizeClass}`;

  return (
    <div className={combinedClasses}>
      {src ? (
        <img
          src={src}
          alt={alt || "User Avatar"}
          className="w-full h-full object-cover cursor-pointer"
        />
      ) : initials ? (
        <span>{initials.substring(0, 2).toUpperCase()}</span>
      ) : (
        <svg
          className="w-2/3 h-2/3 text-gray-500"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
        </svg>
      )}
    </div>
  );
};

export default Avatar;
