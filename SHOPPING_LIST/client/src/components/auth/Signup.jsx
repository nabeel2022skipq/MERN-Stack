import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import '../stylesheetscss/auth.css'
import { registerUser } from '../../actions/authActions'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { Alert } from 'reactstrap'


function SignUp(props) {
    const navigate = useNavigate();
    const [nameValue, setnameValue] = useState("")
    const [emailValue, setemailValue] = useState("")
    const [passwordValue, setpasswordValue] = useState("")
    const [msgValue, setmsgValue] = useState(null)

    function registernewUser() {
        let newUser = { "name": nameValue, "email": emailValue, "password": passwordValue }
        props.registerUser(newUser)
    }
    if (props.isAuthenticated) {
        navigate('/home');
    }

    useEffect(() => {
        if (props.error.id === 'REGISTER_FAIL') {
            setmsgValue(props.error.msg.msg)
        }
        else {
            setmsgValue(null)
        }
    })
    return (
        <div className='auth-wrapper'>
            <div className='auth-inner'>
                <form>
                    {props.isAuthenticated ? <Alert color='success'>Register Successful! Loading...</Alert> : null}
                    {msgValue ? <Alert color='danger'>{msgValue}</Alert> : null}
                    <h3>Sign Up</h3>
                    <div className="mb-3">
                        <label>Name</label>
                        <input style={{ backgroundColor: "#28282B", color: "white" }}
                            type="text"
                            className="form-control mt-2"
                            placeholder="Name"
                            onChange={(e) => setnameValue(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Email address</label>
                        <input style={{ backgroundColor: "#28282B", color: "white" }}
                            type="email"
                            className="form-control mt-2"
                            placeholder="Enter email"
                            onChange={(e) => setemailValue(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input style={{ backgroundColor: "#28282B", color: "white" }}
                            type="password"
                            className="form-control mt-2"
                            placeholder="Enter password"
                            onChange={(e) => setpasswordValue(e.target.value)}
                        />
                    </div>
                    <div className="d-grid">
                        <button id='signup' type="button" className="btn btn-primary mt-4" onClick={registernewUser}>
                            Sign Up
                        </button>
                    </div>
                    <p className="forgot-password text-right">
                        Already registered <Link style={{ textDecoration: "none", color: 'rgba(0,255,255,0.7)', fontSize: "15px" }} to="/sign-in">sign in?</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

SignUp.propTypes = {
    registerUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired
}

const mapDispatchToProps = {
    registerUser
}
function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        error: state.error
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)