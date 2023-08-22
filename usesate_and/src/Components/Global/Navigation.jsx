import React from "react";
import "./Navigation.css";
import {  NavLink } from "react-router-dom";

const MOCK_LINK = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Contact",
        path: "/contact"
    },
    {
        name: "Pricing",
        path: "/pricing"
    },
    {
        name: "Blog",
        path: "/blog"
    }
]

const renderNavigation = () => {
    return MOCK_LINK.map((item, index) => {
        return (
            <li key={index}>
                <NavLink 
                    to={item.path} 
                    activeClassName="active" // Add this line to apply the "active" class to the current route
                >
                    {item.name}
                </NavLink>
            </li>
        );
    });
}

const Navigation = () => {
    return (
        <ul className='flex'>
            {renderNavigation()}
        </ul>
    );
}

export default Navigation;