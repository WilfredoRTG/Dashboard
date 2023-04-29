import React from "react";
import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./screens/home/Home";
import Individual from "./screens/individual/Individual";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="individual" element={<Individual />} />
      </Routes>
    </>
  );
}

export default App;
