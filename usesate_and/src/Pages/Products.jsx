// Products.js
import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const genres = [
        {
            name: "Rock",
            subGenres: [
                { name: "Hard Rock", link: "/products/hard-rock" },
                { name: "Alternative", link: "/products/alternative-rock" },
                { name: "Classic Rock", link: "/products/classic-rock" }
            ]
        },
        {
            name: "Jazz",
            subGenres: [
                { name: "Smooth Jazz", link: "/products/smooth-jazz" },
                { name: "Bebop", link: "/products/bebop" }
            ]
        },
        {
            name: "Pop",
            subGenres: [
                { name: "Pop Hits", link: "/products/pop-hits" }
            ]
        },
        {
            name: "Reggae",
            subGenres: [
                { name: "Bob Marley", link: "/products/bob-marley" }
            ]
        },
        {
            name: "Afro-Pop",
            subGenres: [
                { name: "Davido", link: "/products/davido" },
                { name: "Wizkid", link: "/products/wizkid" }
            ]
        },
        {
            name: "Hip-Hop",
            subGenres: [
                { name: "Drake", link: "/products/drake" },
                { name: "Kendrick Lamar", link: "/products/kendrick-lamar" }
            ]

        }
    ];
    
    return (
        <div>
            <h1>Music Genres</h1>
            <ul>
                {genres.map((genre, idx) => (
                    <li key={idx}>
                        <h2>{genre.name}</h2>
                        <ul>
                            {genre.subGenres.map((sub, subIdx) => (
                                <li key={subIdx}>
                                    <Link to={sub.link}>{sub.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;
