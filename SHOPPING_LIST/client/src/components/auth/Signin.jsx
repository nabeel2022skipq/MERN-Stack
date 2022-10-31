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
    })
    return (
        <div className='auth-wrapper'>
            <div className='auth-inner'>
                <form>
                    {msgValue ? <Alert color='danger'>{msgValue}</Alert> : null}
                    <h3 m-4>Sign In</h3>
                    <div className="mb-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={(e) => setemailValue(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={(e) => setpasswordValue(e.target.value)}
                        />
                    </div>
                    <div className="d-grid">
                        <button type="button" className="btn btn-primary" onClick={loginexistingUser}>
                            LOGIN
                        </button>
                    </div>
                    <p className="forgot-password text-right">
                        Create an account <Link to="/sign-up">sign up?</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.bool,
    error: PropTypes.object.isRequired
}

const mapDispatchToProps = {
    loginUser
}
function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        error: state.error
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)