import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import SignUp from "./components/Signup/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import ForgotPassword from "./components/Forget/ForgetPassword";

function Routing() {
  return (
    <>
        <Router>
            <Routes>
                <Route exact path="" element={<Home></Home>} />
                <Route exact path="/sign-up" element={<SignUp></SignUp>} />
                <Route exact path="/dashboard" element={<Dashboard></Dashboard>} />
                <Route exact path="/forgot-password" element={<ForgotPassword></ForgotPassword>} />
            </Routes>
        </Router>
    </>
  )
}

export default Routing
