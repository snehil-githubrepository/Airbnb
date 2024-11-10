import React from "react";
import Home from "./pages/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./Layout";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
