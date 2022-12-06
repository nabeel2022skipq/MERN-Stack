import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux'
import { loginUser } from '../../actions/authActions'
import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { useState } from 'react';
function Signin(props) {

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

    function validateFields(e) {
        let finalresult;


        //Email validation
        if (document.getElementById('signinemailText').value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            e.preventDefault();
            document.getElementById('signinemailHelp').innerHTML = "";
            finalresult = true;
        }
        else {
            e.preventDefault();
            document.getElementById('signinemailHelp').innerText = "Please enter valid email"
            finalresult = false;
        }

        //Password Validation
        if (document.getElementById('signinpasswordText').value.length >= 8) {
            e.preventDefault();
            document.getElementById('singinpasswordHelp').innerHTML = "";
            finalresult = true;
        }
        else {
            e.preventDefault();
            document.getElementById('singinpasswordHelp').innerText = "Password should be 8 characters long."
            finalresult = false;
        }

        if (finalresult === true) {
            console.log("Form validated")
            loginexistingUser();
        }
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
        <React.Fragment>
            <div className='relative'>
                <div>
                    <section className='w-full h-screen'>
                        <img src='https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg' className='object-cover h-full w-full blur-sm' alt="colorful leafs"></img>
                    </section>
                </div>

                {/* <div className='absolute top-5 left-5'>
                    <h1 className=' text-6xl text-red-600 font-extrabold select-none hidden lg:block bg-opacity-100'>𝐍𝐄𝐓𝐅𝐋𝐈𝐗</h1>
                </div> */}


                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className='bg-black px-10 space-y-7 py-7 bg-opacity-70 rounded-xl xl:mx-32'>
                        {msgValue ? <Alert color='danger' className='text-white p-2 rounded-md bg-red-600 bg-opacity-70 text-center' >{`𝐄𝐫𝐫𝐨𝐫: ${msgValue}`}</Alert> : null}
                        {/* Heading */}
                        <div ><h2 className='text-white text-4xl font-bold'>Sign In</h2></div>


                        {/* Form */}
                        <div className='space-y-6'>
                            <input type='text' id='signinemailText' placeholder='E-Mail' onChange={(e) => setemailValue(e.target.value)} className='shadow-xl rounded-md py-4 px-3 w-full text-white' style={{ backgroundColor: "#333333" }}></input>
                            <small id="signinemailHelp" className="text-red-500 font-semibold"></small>

                            <input type='text' id='signinpasswordText' placeholder='Password' onChange={(e) => setpasswordValue(e.target.value)} className='shadow-xl rounded-md py-4 px-3 w-full text-white' style={{ backgroundColor: "#333333" }}></input>
                            <small id="singinpasswordHelp" className="text-red-500 font-semibold"></small>
                        </div>

                        {/* Submit Button */}
                        <div className='space-y-3'>
                            <Link ><button type='button' className='shadow-xl rounded-md py-4 px-3 w-full bg-red-600 text-white' onClick={validateFields}>Sign In</button></Link>
                            <button type='button' className='shadow-xl rounded-md py-4 px-3 w-full text-white' style={{ backgroundColor: "#1458C7" }}><div className='flex items-center justify-center space-x-2'><FcGoogle className='transform scale-150'></FcGoogle><p className='hidden sm:block'>Sign In with Google</p></div></button>
                        </div>

                        {/* Footer */}
                        <div className='px-5'><hr></hr></div>

                        <div className='text-center'>
                            <p className='text-gray-500'>
                                Create new account{" "}
                                <Link className='text-red-600 font-bold' to="/sign-up">
                                    Sign up?
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div >
        </React.Fragment >
    );
}

Signin.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(Signin)