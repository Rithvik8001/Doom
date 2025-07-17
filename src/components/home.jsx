import React from "react";
import Navbar from "./nav";
import Header from "./header";

const Home = () => {
  return (
    <>
      <div className="bg-gray-50">
        <div className="p-4">
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="grow">
              <Header />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
