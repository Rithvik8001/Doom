import React from "react";
import Navbar from "./nav";
import Header from "./header";
import Footer from "./footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#dbeafe] ">
      <div className="max-w-5xl mx-auto">
        <Navbar />
        <Header />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
