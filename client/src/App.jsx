// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarAndHome from "./components/Combined";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<NavbarAndHome />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
            <Route path="/resetPassword/:token" element={<ResetPassword />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
