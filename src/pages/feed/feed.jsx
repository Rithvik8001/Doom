import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../home/nav";
import { Navigate } from "react-router-dom";

const Feed = () => {
  const user = useSelector((state) => state.user);

  if (!user) {
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
