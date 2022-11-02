import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/authActions'
import PropTypes from 'prop-types'
import '../stylesheetscss/auth.css'
import { Alert } from 'reactstrap';


function Login(props) {
    const navigate = useNavigate();
    const [emailValue, setemailValue] = useState("")
    const [passwordValue, setpasswordValue] = useState("")
    const [msgValue, setmsgValue] = useState(null)
    const [tokenValue, settokenValue] = useState(null)



    function loginexistingUser() {
        let existinguser = { "email": emailValue, "password": passwordValue }
        props.loginUser(existinguser)
    }
    if (props.isAuthenticated) {
        navigate('/home');
    }

    useEffect(() => {
        if (props.error.id === "LOGIN_FAIL") {
            setmsgValue(props.error.msg.Error)
        }
        else {
            setmsgValue(null)
        }
        if (props.token !== null) {
            settokenValue(props.token)
        }
        else {
            settokenValue(null)
        }
    })
    return (
        <div className='auth-wrapper'>
            <div className='auth-inner'>
                <form>
                    {tokenValue ? <Alert color='success'>Login Successful! Loading...</Alert> : null}
                    {msgValue ? <Alert color='danger'>{msgValue}</Alert> : null}
                    <h3 m-4>Sign In</h3>
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
                        <button id="login" type="button" className="mt-4" onClick={loginexistingUser}>
                            LOGIN
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
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    token: PropTypes.string
}

const mapDispatchToProps = {
    loginUser
}
function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        error: state.error,
        token: state.auth.token
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)