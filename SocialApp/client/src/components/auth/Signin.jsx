import React, { Component, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/auth.css'
function Login() {
    return (
        <div className='auth-wrapper'>
            <div className='auth-inner'>
                <form>
                    <h3>Sign In</h3>
                    <div className="mb-3">
                        <label>Email address</label>
                        <input style={{ backgroundColor: "#28282B", color: "white" }}
                            type="email"
                            className="form-control mt-2"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input style={{ backgroundColor: "#28282B", color: "white" }}
                            type="password"
                            className="form-control mt-2"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="d-grid">
                        <button id='signup' type="button" className="btn btn-primary mt-4">
                            Sign Up
                        </button>
                    </div>
                    <p className="forgot-password text-right">
                        Create an account <Link style={{ textDecoration: "none", color: 'rgba(0,255,255,0.7)', fontSize: "15px" }} to="/sign-up">sign up?</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;