import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";  // 1. Import useNavigate instead of useHistory
import Button from "../Shared/Button";
import URL from "../../Constant/Constant";
import Input from "../Shared/Input";
import './Login.css';

const Login = () => {
    const [data , setData] = useState({});
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const formRef = useRef(null);
    const navigate = useNavigate();  // Call the useNavigate hook

    const RegisterUserDataRequest = (dataToSend) => {
        fetch(URL.LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            
            navigate('/products');  //  Use the navigate function to redirect to the desired route
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    const validateForm = () => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (firstName !== "" && emailPattern.test(email)) {
            RegisterUserDataRequest(data);
        } else {
            alert("Please fill the form with valid data");
        }
    }

    function submitForm(event) {
        event.preventDefault();
        validateForm();
    
        // Reset the state
        setFirstName("");
        setLastName("");
        setEmail("");
        setData({});
    
        // Reset the form fields visually
        if (formRef.current) {
            formRef.current.reset();
        }
    }

    return (
        <form ref={formRef} onSubmit={submitForm}>
        <h2 className="login-heading">Register</h2>
           <Input 
            type="text"
            name="firstname"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => {
                setFirstName(e.target.value);
                setData(prevData => ({ ...prevData, firstName: e.target.value }));
            }}
        />
    
        <Input 
            type="text"
            name="lastname"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => {
                setLastName(e.target.value);
                setData(prevData => ({ ...prevData, lastName: e.target.value }));
            }}
        />
  
        <Input 
            type="email"
            name="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
                setEmail(e.target.value);
                setData(prevData => ({ ...prevData, email: e.target.value }));
            }}
        />
<br />

        <Button className="button" type="submit">Submit</Button>

        </form>
    );
}

export default Login;
