import React, { useState } from "react";
import Heading from "../Shared/Heading";
import Button from "../Shared/Button";
import Label from "../Shared/Label";
import Input from "../Shared/Input";
import style from "./Form.module.css";


const Form = () => {
  const [userData, setUserData] = useState();

  const onChangeHandler = (e) => {
    const {name, value } = e.target
    setUserData((prevState) => {
      return ({...prevState, [name]: value})
    })
    // setName(e.target.value)
    // setEmail(e.target.value)
  }
  const formStyle = {
    backgroundColor: "red",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
  };

  return (
    <section className={style.formContainer}>

      <Heading heading="Register Now" />
        <p>{JSON.stringify(userData)}</p>
        
      <div className={formStyle}>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" placeholder="Enter Name" onChange={onChangeHandler} />
      </div>

      <div className={style.inputGroup}>
        <Label htmlFor="email">Email </Label>
        <Input type="email" id="email" name="email" placeholder="Enter Email" onChange={onChangeHandler} />
      </div>

      <div className={style.inputGroup}>
        <Label htmlFor="password" >Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
          onChange={onChangeHandler}
        />
      </div>

      <div className={style.inputGroup}>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
      </div>
      

      <Button type="submit">Submit</Button>
    </section>
  );
};

export default Form;
