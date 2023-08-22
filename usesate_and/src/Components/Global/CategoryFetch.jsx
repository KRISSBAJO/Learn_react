import React, {useState, useEffect } from "react";
import Card from "../Shared/Card";
import "./Category.css";

const Category = () => {
    const [users, setUsers] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch users.");
                }
                return response.json();
            })
            .then(data => {
                setUsers(data);
            })
            .catch(err => {
                setError(err.message || "An error occurred!");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const createCard = () => {
        return users.map((user, index) => {
            return <Card data={user} key={index} />
        });
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="cards-wrapper">
            {users && createCard()}
        </div>
    );
};

export default Category;