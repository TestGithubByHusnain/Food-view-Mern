import React from 'react'
import '../styles/auth.css'
import { Link } from 'react-router-dom'

export default function FoodPartnerLogin(){
  return (
    <div className="auth-root">
      <div className="auth-card">
        <div className="brand">
          <div className="logo">FP</div>
          <div>
            <h1>Partner sign in</h1>
            <p>Access your partner dashboard</p>
          </div>
        </div>

        <h2 className="auth-title">Sign in</h2>
        <p className="auth-sub">Use your partner credentials to sign in.</p>

        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="owner@business.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Your password" />
          </div>

          <div className="switch-row">
            <label className="small"><input type="checkbox"/> Remember me</label>
            <a className="small" href="#">Forgot?</a>
          </div>

          <button type="button" className="btn">Sign in</button>
        </form>

        <div className="footer-note">New partner? <Link to="/food-partner/register">Create account</Link></div>
      </div>
    </div>
  )
}
