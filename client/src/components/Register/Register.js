import React, { useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import newRequest from "../../util/newRequest";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  
  const [user, setUser] = useState({
    username:"",
    email:"",
    password:"",
  })

  const navigate = useNavigate()

  const handleChange = (e)=>{
    setUser((prev)=>{
      return {...prev, [e.target.name]:e.target.value}
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
      await newRequest.post("/auth/register",user)
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }

  const notify = () => toast("New Product added");

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            placeholder="username"
            onChange={handleChange}
          />
          <label htmlFor="">Mobile no.</label>
          <input
            name="phone"
            type="phone"
            placeholder="+91 0123 456789"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input name="password" type="password" onChange={handleChange}/>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;