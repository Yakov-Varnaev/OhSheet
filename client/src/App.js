import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AppRouter from "./componets/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
