import React from 'react'
import '../styles/auth.css'
import { Link } from 'react-router-dom'

export default function ChooseRegister(){
  return (
    <div className="auth-root">
      <div className="auth-card">
        <div className="brand">
          <div className="logo">FR</div>
          <div>
            <h1>FoodReel</h1>
            <p>Choose account type to get started</p>
          </div>
        </div>

        <h2 className="auth-title">Create an account</h2>
        <p className="auth-sub">Select the type of account you want to create.</p>

        <div style={{display:'grid',gap:10}}>
          <Link to="/user/register" className="btn">Register as User</Link>
          <Link to="/food-partner/register" className="btn ghost">Register as Food Partner</Link>
        </div>

        <div className="footer-note">Already have an account? <Link to="/user/login">Login</Link></div>
      </div>
    </div>
  )
}
