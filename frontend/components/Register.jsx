import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useForm} from "react-hook-form"
const Register = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const OnSubmit = async (data) => {
    try {
        const response = await axios.post('http://localhost:3000/register', data);
    } catch (error) {
        console.error('There was an error submitting the form!', error);
    }
};

  return (
    <div className="warapper">
    <div className="container">
        <h2>Register</h2>
        <form action="/register" method="POST" onSubmit={handleSubmit(OnSubmit)}>
            <div className="form-group">
                <label >Username</label>
                <input {...register("username")} type="text"  name="username"/>
            </div>
            <div className="form-group">
                <label >Email</label>
                <input {...register("email")} type="email"  name="email" />
            </div>
            <div className="form-group">
                <label >Password</label>
                <input {...register("password")} type="password"  name="password" />
            </div>
            <div className="form-group">
                <button type="submit" value='submit'>Register</button>
            </div>
            <p>Already have an account?<Link to="/login" className='link'>Login</Link></p>
        </form>
    </div>
    </div>

  )
}

export default Register