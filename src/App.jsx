import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Signup from "./components/sign-up/sign-up";
import Login from "./components/login/login";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
