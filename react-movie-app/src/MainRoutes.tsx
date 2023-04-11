import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import NotFound from "./Component/NotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
