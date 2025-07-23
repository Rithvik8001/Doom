import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../home/nav";
import { Navigate } from "react-router-dom";

const Feed = () => {
  // Get user from global Redux state. If not present, user is not authenticated.
  const user = useSelector((state) => state.user);

  if (!user) {
    // If user is not authenticated, redirect to login page
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-[#dbeafe]">
        <div className="max-w-4xl mx-auto">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Feed;
