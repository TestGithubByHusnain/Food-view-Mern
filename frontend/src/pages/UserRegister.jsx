import React from 'react'
import '../styles/auth.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserRegister = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        const response = await axios.post("http://localhost:3000/api/auth/user/register", {
            fullName: firstName + " " + lastName,
            email,
            password
        },
        {
            withCredentials: true
        })

        console.log(response.data);

        navigate("/")

    };
  return (
    <div className="auth-root">
      <div className="auth-card">
        <div className="brand">
          <div className="logo">U</div>
          <div>
            <h1>Create user account</h1>
            <p>Sign up to explore delicious food near you</p>
          </div>
        </div>

        <h2 className="auth-title">Sign up</h2>
        <p className="auth-sub">No credit card required — just a few details.</p>

        <form  onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" />
          </div>

          <button type="button" className="btn">Create account</button>
        </form>

        <div className="or-divider">or</div>
        <div style={{display:'flex',gap:8}}>
          <button className="btn ghost" style={{flex:1}}>Continue with Google</button>
          <button className="btn ghost" style={{flex:1}}>Continue with Apple</button>
        </div>

        <div className="footer-note">Already registered? <Link to="/user/login">Login</Link></div>
      </div>
    </div>
  )
};
export default UserRegister
