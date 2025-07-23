import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/home";
import Signup from "./pages/sign-up/sign-up";
import Login from "./pages/login/login";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import store from "./store/store";
import Feed from "./pages/feed/feed";
import useAuthUser from "./hooks/useAuthUser";
import Loading from "./pages/ui/loading";

function AppWithAuth() {
  const { user, loading } = useAuthUser();

  if (loading) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/feed" /> : <Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/login"
        element={user ? <Navigate to="/feed" /> : <Login />}
      />
      <Route
        path="/feed"
        element={user ? <Feed /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default function App() {
  return (
    <>
      <Toaster />
      <Provider store={store}>
        <AppWithAuth />
      </Provider>
    </>
  );
}
