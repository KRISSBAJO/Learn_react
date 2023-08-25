import React from "react";

import Banner from "../Components/Global/Banner";
import Category from "../Components/Global/Category";

import Description from "../Components/Shared/Description";
import Heading from "../Components/Shared/Heading";
import Login from "../Components/Login/Login"
import DjangoUser from "../Pages/DjangoUser";
import EmployeeRegistration from "../Pages/EmployeeRegistration";
import "./Home.css";



const Home = () => {

    return <section>

        {/* <Header /> */}
        <DjangoUser />
        <Login />
        <Banner />
        <EmployeeRegistration />
        <Category />
        <Heading />
        {/* <button className="bg-amber-50 p-4 text-rose-600  rounded-md bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">Click</button> */}
        <Description />
        
        {/* <Footer /> */}
    </section>

}

export default Home