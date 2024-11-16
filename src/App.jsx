import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./Layout";
import Register from "./pages/Register";
import Places from "./pages/Places";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/account/:subpage?" element={<Places />} />
          <Route path="/account/:subpage/:action" element={<Places />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
