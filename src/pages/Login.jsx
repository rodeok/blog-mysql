import React from 'react'
import { Link } from 'react-router-dom'
import "./css/login.css"
function Login() {
  return (
    <div className="auth">
     <h1 className='login'>Login</h1>   
     <form className='login-form'>
        <input type="text" placeholder='Username' />
        <input type="password" placeholder='Password' />
        <button>Login</button>
        <p className='login-err'>This is an error</p>
        <span className='login-span'>Dont have an account? <Link to="/register">Register</Link> </span>
     </form>
    </div>
  )
}

export default Login