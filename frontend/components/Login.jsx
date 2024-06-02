import React from 'react'
import "../styles/Login.css"
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className="warapper">
    <div className="container">
        <h2>Login</h2>
        <form action="/login" method="POST">
            <div className="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" />
            </div>
            <div className="form-group">
                <Link to='/dashboard'>
                <button type="submit">Login</button>
                </Link>
            </div>
            <p>Don't have an account?<Link to="/register" className="link" >Register</Link></p>
        </form>
    </div>
    </div>
  )
}

export default Login