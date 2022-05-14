import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "../router";

function AppRouter() {
  return (
    <Routes>
      {publicRoutes.map(({ path, element }) => {
        return <Route path={path} element={element} key={path} />;
      })}
      <Route path="*" element={<Navigate to="signup/" />} />
    </Routes>
  );
}

export default AppRouter;
