import "./App.css";
import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Login } from "./components/Auth/Login";

function App() {
  return (
    <Layout>
      <Login />
    </Layout>
  );
}

export default App;
