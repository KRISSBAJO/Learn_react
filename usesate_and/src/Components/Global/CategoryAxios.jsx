import React, {useState, useEffect } from "react";
import Card from "../Shared/Card";
import "./Category.css";
import axios from "axios";

const Category = () => {
    const [users, setUsers] = useState([]); // State variable to store users

    
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then((response) => setUsers(response.data))
            .catch((error) => console.log(error));         
    }, [
        // Dependency array
    ]);

    
    const createCard = () => {
        return users.map((user, index) => {
            return <Card  data={user} key={index} />
        })
    }
        
     
    return (
        <div className="cards-wrapper">
            {users && createCard()}
        </div>
    );
}


export default Category