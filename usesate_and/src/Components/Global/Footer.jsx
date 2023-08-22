import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <h4>LogoXP Music Store</h4>
                <ul className="footer-links">
                
                <li><NavLink to="/products" >Products</NavLink></li>

                
                <li><NavLink to="/faq" >FAQ</NavLink></li>
                <li><NavLink to="/help">Help</NavLink></li>
                <li><NavLink to="/getstarted">Get Started</NavLink></li>
                <li><a href="#!">Privacy Policy</a></li> 
            </ul>

            </div>
            <div className="footer-bottom">
                <small>&copy; 2023 LogoXP Music Store. All Rights Reserved.</small>
            </div>
        </div>
    );
}

export default Footer;
