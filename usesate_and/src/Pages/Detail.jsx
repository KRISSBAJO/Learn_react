import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Detail.css';
import axios from "axios";

const Detail = () => {
    const params = useParams();
    const [user, setUser] = useState(null);

    const getUserData = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
            setUser(response.data);
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    };

    useEffect(() => {
        getUserData();
    }, [
        params.id,
    ]);

    return (
        <div className="detail-container">
            <h2 className="user-details">Music Details</h2>
            {user ? (
                <>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{user.name} ({user.username})</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>{user.phone}</td>
                        </tr>
                        <tr>
                            <td>Website</td>
                            <td>{user.website}</td>
                        </tr>
                        <tr>
                            <td colSpan="2"><strong>Address:</strong></td>
                        </tr>
                        <tr>
                            <td>Street</td>
                            <td>{user.address.street}</td>
                        </tr>
                        <tr>
                            <td>Suite</td>
                            <td>{user.address.suite}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>{user.address.city}</td>
                        </tr>
                        <tr>
                            <td>Zipcode</td>
                            <td>{user.address.zipcode}</td>
                        </tr>
                        <tr>
                            <td>Coordinates</td>
                            <td>Lat {user.address.geo.lat} / Lng {user.address.geo.lng}</td>
                        </tr>
                        <tr>
                            <td colSpan="2"><strong>Company:</strong></td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{user.company.name}</td>
                        </tr>
                        <tr>
                            <td>Catch Phrase</td>
                            <td>{user.company.catchPhrase}</td>
                        </tr>
                        <tr>
                            <td>BS</td>
                            <td>{user.company.bs}</td>
                        </tr>
                    </tbody>
                </table>
                <a href="#!" className="listen-now-btn">Listen Now</a>
                </>
            ) : (
                <p>Loading user details...</p>
            )}
        </div>
    );
}

export default Detail;


