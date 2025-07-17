import React from "react";
import Navbar from "./nav";
import Header from "./header";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto">
        <Navbar />
        <Header />
      </div>
    </div>
  );
};

export default Home;
