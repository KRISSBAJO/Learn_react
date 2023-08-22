import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Global/Header";
import Footer from "../Components/Global/Footer";


const RouteLayout = () => {

    return(
    <>

    <Header />
        <Outlet />
    <Footer />
    </>
    )
}

export default RouteLayout;