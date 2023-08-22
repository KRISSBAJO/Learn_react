import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";

import RootLayout from '../Layout/RootLayout'; 
import ContactLayout from '../Layout/ContactLayout';
import Faq from '../Pages/Faq';
import Help from '../Pages/Help';
import ErrorPage from '../Pages/Errorpage';
import Detail from '../Pages/Detail';
import GetStarted from '../Pages/GetStarted';
import Products from '../Pages/Products';
import Pricing from '../Pages/Pricing';
import Blog from '../Pages/Blog';

const RouterRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path=":id" element={<Detail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pricing" element={<Pricing />} />
             <Route path="/blog" element={<Blog />} />
          <Route path="contact" element={<ContactLayout />} />
            <Route path="faq" element={<Faq />} />
            <Route path="help" element={<Help />} />
            <Route path="getstarted" element={<GetStarted />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterRoot;

  


    

