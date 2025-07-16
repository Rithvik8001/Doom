import React from "react";
import Navbar from "./components/nav";

export default function App() {
  return (
    <>
      <div className="bg-gray-50">
        <div className="p-4">
          <div className="min-h-screen flex flex-col">
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
}
