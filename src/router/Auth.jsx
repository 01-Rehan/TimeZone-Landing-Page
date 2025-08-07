import React from "react";
import { useLocation } from "react-router-dom";
import { Route,Routes } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

export const Auth = () => {
  const location = useLocation();
  return (
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
  );
};
