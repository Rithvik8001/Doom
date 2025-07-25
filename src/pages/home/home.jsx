import React from "react";
import Navbar from "./nav";
import Header from "./header";
import Footer from "./footer";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.user);

  if (user) {
    return <Navigate to="/feed" />;
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#dbeafe] ">
      <div className="max-w-4xl mx-auto">
        <Navbar />
        <Header />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
