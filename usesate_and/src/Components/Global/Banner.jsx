import React from "react";
import messages from "../../Constant/content";
import "./Banner.css";

const Banner = () => {
    return (
        <div>
            <p>{messages.banner}</p>
            <p className="about-heading">{messages.about.heading}</p>
        </div>
    );
}

export default Banner;
