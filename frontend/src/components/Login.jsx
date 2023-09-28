import React from 'react'
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/user/login',{email,password})
        .then(result =>{
            console.log(result);
            if(result.status===200){
                toast.success('Login successful!');
                navigate('/dashboard');
            }else{
                toast.warning('Wrong Details!')
            }
        })
        .catch(err=> {
            console.log("login error ",err)
            toast.error('Login failed. Please check your credentials.');  
        })
    }
    return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
    <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='email'>
                    <strong>Email</strong>
                </label>
                <input type="email" placeholder='Enter Email' autoComplete='off' name='email' className='form-control rounded-0' onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
            </div>
            <div className='mb-3'>
                <label htmlFor="email">
                    <strong>Password</strong>
                </label>
                <input type="password" placeholder='Enter password' name='password' className='form-control rounded-0' onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
        </form>
        <p>Don't have an account?</p>
        <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-o text-decoreation-none'>Signup</Link>
    </div>
    </div>
  )
}

export default Login