import React from 'react'
import  "../styles/Home.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <div className="navbar">
   <Link to="/register">Signup</Link>
   <Link to="/login">Login</Link>
</div>
<div className="wrapper">
<div className="container">
    <h1>Welcome to Our Service Portal</h1>
    <h3>Start your certificate process with us we get you the following certificates</h3>
    <div className="links">
       <ul>
        <li>Aadhar Card</li>
        <li>PAN Card</li>
        <li>Birth Certificate</li>
        <li>Death Certificate</li>
        <li>Driving Licence</li>
       </ul>
       
    </div>
</div>
</div>
</>
  )
}

export default Home