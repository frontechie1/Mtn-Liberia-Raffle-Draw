import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EnterDetails from "./pages/enter_details/_page";
import { Login } from "./pages/login/_page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<EnterDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
