import React from "react";
import "./Card.css";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const MOCK_DATA = [
    {
        id: 1,
        musicType: "Pop"
    },
    {
        id: 2,
        musicType: "Rock"
    },
    {
        id: 3,
        musicType: "Jazz"
    },
    {
        id: 4,
        musicType: "Hip Hop"
    },
    {
        id: 5,
        musicType: "Country"
    },
    {
        id: 6,
        musicType: "R&B"
    }
];

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const getRandomMusicType = () => {
    const randomIndex = Math.floor(Math.random() * MOCK_DATA.length);
    return MOCK_DATA[randomIndex].musicType;
};

const Card = ({data}) => {
    const cardColor = getRandomColor(); 
    const randomMusicType = getRandomMusicType(); 

    return (
        <NavLink to={data.id.toString()}>
            <div className="card-container" style={{backgroundColor: cardColor}}>
                <h2>{data.name}</h2>
                <h2>{randomMusicType}</h2>
                <p>{data.musicType}</p>
                <Button className="details">Details</Button>
            </div>
        </NavLink>
    );
}

export default Card;
