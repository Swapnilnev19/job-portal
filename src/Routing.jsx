import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import CommonForm from "./components/CommonForm/FormCommon";

function Routing() {
  return (
    <>
        <Router>
            <Routes>
                {/* <Route path="/" element={<Home></Home>} /> */}
                <Route path="/" element={<CommonForm />} />
                <Route path="/sign-up" element={<CommonForm/>} />
                <Route path="/forget-password" element={<CommonForm/>} />
                <Route path="/dashboard" element={<Dashboard></Dashboard>} />
            </Routes>
        </Router>
    </>
  )
}

export default Routing
