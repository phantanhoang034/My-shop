import React from "react";
import { Route, Routes } from "react-router-dom";


import Home from "../pages/Home";
import Boy from "../pages/Boy";
import Girl from "../pages/Girl";
import Login from "../pages/Login";
import Product from "../pages/Product";
import AddtoCart from "../pages/AddtoCart";
import ChecktoCart from "../pages/ChecktoCart";
import Sale from "../pages/Sale";

const RoutesPage = () => {
    return(
        <Routes >
            <Route path="/" element = {<Home />} />
            <Route path="/boy" element = {<Boy />} />
            <Route path="/girl" element = {<Girl />} />
            <Route path="/login" element = {<Login />} />
            <Route path="/ss" element = {<Sale />} />
            <Route path="/:id" element = {<Product />} />
            
            <Route path="/addtocart" element = {<AddtoCart />} />
            <Route path="/checktocart" element ={<ChecktoCart />} />


        </Routes>
    )
}
export default RoutesPage