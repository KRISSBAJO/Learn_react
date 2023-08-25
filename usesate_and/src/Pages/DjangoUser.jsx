import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DjangoUser = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // Get the token from local storage or wherever you store it
            const token = localStorage.getItem('token');

            try {
                const response = await axios.get('http://127.0.0.1:8000/api/users/', {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                });
                setUsers(response.data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Django Users:</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {/* Display the user fields you want */}
                        {user.username}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DjangoUser;

