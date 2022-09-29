import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from "axios"
function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email:"",
    password:"",
  })
  const handleChange = e =>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleSubmit =  async e =>{
    e.preventDefault()
    try{
        const res = await axios.post("/auth/register", inputs)
        console.log(res)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="auth">
    <h1 className='login'>Register</h1>   
    <form className='login-form'>
       <input type="text" placeholder='Username' name="username" onChange={handleChange} />
       <input type="email" placeholder='Email' name="email" required onChange={handleChange}/>
       <input type="password" placeholder='Password' name="password" onChange={handleChange} />
       <button onClick={handleSubmit}>Register</button>
       <p className='login-err'>This is an error</p>
       <span className='login-span'>Do you have an account? <Link to="/login">Login</Link> </span>
    </form>
   </div>
  )
}

export default Register