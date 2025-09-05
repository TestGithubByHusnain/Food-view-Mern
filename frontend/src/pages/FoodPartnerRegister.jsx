import React from 'react'
import '../styles/auth.css'
import { Link } from 'react-router-dom'

export default function FoodPartnerRegister(){
  return (
    <div className="auth-root">
  <div className="auth-card card">
        <div className="brand">
          <div className="logo">FP</div>
          <div>
            <h1>Partner sign up</h1>
            <p>List and manage your food offerings</p>
          </div>
        </div>

        <h2 className="auth-title">Create partner account</h2>
        <p className="auth-sub">Tell us about your business.</p>

        <form>
          <div className="form-group">
            <label>Business Name</label>
            <input className="input" type="text" placeholder="Your business name" />
          </div>

          <div className="form-group">
            <label>Contact Name</label>
            <input className="input" type="text" placeholder="Full name of contact person" />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input className="input" type="tel" placeholder="+1 555 555 5555" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input className="input" type="email" placeholder="owner@business.com" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input className="input" type="password" placeholder="Create a password" />
          </div>

          <div className="form-group">
            <label>Address</label>
            <input className="input" type="text" placeholder="Street, City, State, ZIP" />
          </div>

          <button type="button" className="btn">Create account</button>
        </form>

        <div className="footer-note">Already a partner? <Link to="/food-partner/login">Login</Link></div>
      </div>
    </div>
  )
}
