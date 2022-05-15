import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./componets/AppRouter";
import Navbar from "./componets/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
