import React, { useState } from 'react';
import axios from 'axios';

const EmployeeRegistration = () => {
    const [formData, setFormData] = useState({
        email: '',
        first_name: '',
        last_name: '',
        position: ''
    });
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/api/employees/', formData);
            setIsSuccess(true);
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div>
            <h2>Employee Registration</h2>

            {isSuccess && <div>Registration successful!</div>}
            {error && <div>Error: {error}</div>}

            <form onSubmit={handleSubmit}>
                <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} required />
                <input name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} required />
                <input name="position" placeholder="Position" value={formData.position} onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default EmployeeRegistration;
