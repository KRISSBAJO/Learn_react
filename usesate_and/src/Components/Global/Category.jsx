import React, {useState, useEffect } from "react";
import Card from "../Shared/Card";
import "./Category.css";
import axios from "axios";

const Category = () => {
    const [users, setUsers] = useState([]); 

    const getUserData = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(response.data);
        } catch (error) {
            console.log(`Error: ${error}`); // Error: `Error: Request failed with status code 404`)
        }
    };

    useEffect(() => {
        getUserData();       
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