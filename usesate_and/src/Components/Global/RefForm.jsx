import React, {  useRef } from "react";
import Heading from "../Shared/Heading";
import Button from "../Shared/Button";
import Label from "../Shared/Label";
import Input from "../Shared/Input";
import style from "./Form.module.css";


const RefForm = () => {
    const userData = {}
    const name = useRef();
    const email = useRef();
   
 

    const changeHandler = () => {
        if (name.current && email.current) {
            userData.firstname = name.current.value;
            userData.emails = email.current.value;
            console.log(userData);
        }
    };
    
    console.log(userData)

    // const submitHandler = (event) => {
    //     console.log(userData);
    //     event.preventDefault();
    //     // Your logic to process the form data
    // }
    
  const formStyle = {
    backgroundColor: "red",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
  };
  

  return ( <section className={style.formContainer}>

      <Heading heading="Register Now" />

     
      <div className={formStyle}>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" placeholder="Enter Name" onChange={changeHandler} ref={name} />
      </div>

      <div className={style.inputGroup}>
        <Label htmlFor="email">Email </Label>
        <Input type="email" id="email" name="email" placeholder="Enter Email" onChange={changeHandler} ref={email}/>
      </div>

      {/* <div className={style.inputGroup}>
        <Label htmlFor="password" >Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
         
        />
      </div> 

      <div className={style.inputGroup}>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
      </div> */}
      

      <Button type="submit" >Submit</Button>
      
    </section>
  );
};

export default RefForm;
