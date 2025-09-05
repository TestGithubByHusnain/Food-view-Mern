import React from 'react'
import '../styles/auth.css'
import { Link } from 'react-router-dom'

export default function UserLogin(){
  return (
    <div className="auth-root">
      <div className="auth-card">
        <div className="brand">
          <div className="logo">U</div>
          <div>
            <h1>User sign in</h1>
            <p>Welcome back — sign in to continue</p>
          </div>
        </div>

        <h2 className="auth-title">Sign in</h2>
        <p className="auth-sub">Use your account credentials to login.</p>

        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
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

        <div className="or-divider">or</div>
        <div style={{display:'flex',gap:8}}>
          <button className="btn ghost" style={{flex:1}}>Continue with Google</button>
          <button className="btn ghost" style={{flex:1}}>Continue with Apple</button>
        </div>

        <div className="footer-note">New here? <Link to="/register">Create an account</Link></div>
      </div>
    </div>
  )
}
