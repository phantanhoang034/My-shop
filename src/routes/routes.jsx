import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Boy from "../pages/Boy";
import Girl from "../pages/Girl";
import Login from "../pages/Login";

const RoutesPage = () => {
    return(
        <Routes >
            <Route path="/" element = {<Home />} />
            <Route path="/boy" element = {<Boy />} />
            <Route path="/girl" element = {<Girl />} />
            <Route path="/login" element = {<Login />} />


        </Routes>
    )
}
export default RoutesPage