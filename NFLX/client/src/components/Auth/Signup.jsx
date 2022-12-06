import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FileBase64 from 'react-file-base64';
import './stylesheet/signup.css'
import { registerUser } from '../../actions/authActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Alert } from 'reactstrap'
import { useState } from 'react';
import { useEffect } from 'react';
function Signup(props) {

    const navigate = useNavigate();
    const [nameValue, setnameValue] = useState("")
    const [emailValue, setemailValue] = useState("")
    const [passwordValue, setpasswordValue] = useState("")
    const [item, setItem] = useState({ image: '' });
    const [msgValue, setmsgValue] = useState(null)

    function registernewUser() {
        let newUser = { "name": nameValue, "email": emailValue, "password": passwordValue, "image": item.image }
        props.registerUser(newUser)
    }
    if (props.isAuthenticated) {
        navigate('/home');
    }

    function validateFields(e) {
        let finalresult;

        //Name validation
        if (document.getElementById('nameText').value !== "") {
            e.preventDefault();
            document.getElementById('nameHelp').innerHTML = "";
            finalresult = true;
        }
        else {
            e.preventDefault();
            document.getElementById('nameHelp').innerText = "Please enter your Name"
            finalresult = false;
        }

        //Email validation
        if (document.getElementById('emailText').value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            e.preventDefault();
            document.getElementById('emailHelp').innerHTML = "";
            finalresult = true;
        }
        else {
            e.preventDefault();
            document.getElementById('emailHelp').innerText = "Please enter valid email"
            finalresult = false;
        }

        //Password Validation
        if (document.getElementById('passwordText').value.length >= 8) {
            e.preventDefault();
            document.getElementById('passwordHelp').innerHTML = "";
            finalresult = true;
        }
        else {
            e.preventDefault();
            document.getElementById('passwordHelp').innerText = "Password should be 8 characters long."
            finalresult = false;
        }

        if (finalresult === true) {
            console.log("Form validated")
            registernewUser();
        }
    }

    useEffect(() => {
        if (props.error.id === "REGISTER_FAIL") {
            setmsgValue(props.error.msg.Error)
        }
        else {
            setmsgValue(null)
        }
    })
    return (
        <div className='relative'>
            <div>
                <section className="w-full h-screen">
                    <img src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg" className="object-cover w-full h-full blur-sm" alt="colorful leafs" />
                </section>
            </div>

            {/* <div className='absolute top-5 left-5'>
                <h1 className=' text-6xl text-red-600 font-extrabold hidden sm:block'>𝐍𝐄𝐓𝐅𝐋𝐈𝐗</h1>
            </div> */}


            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className='bg-black px-10 space-y-7 py-7 bg-opacity-70 rounded-xl xl:mx-32'>
                    {msgValue ? <Alert color='danger' className='text-white p-2 rounded-md bg-red-600 bg-opacity-70 text-center' >{`𝐄𝐫𝐫𝐨𝐫: ${msgValue}`}</Alert> : null}
                    {/* Heading */}
                    <div ><h2 className='text-white text-4xl font-bold'>Sign Up</h2></div>


                    {/* Form */}
                    <div className='space-y-6'>
                        <input type='text' id='nameText' placeholder='Your Name' onChange={(e) => setnameValue(e.target.value)} className='shadow-xl rounded-md py-4 px-3 w-full text-white' style={{ backgroundColor: "#333333" }}></input>
                        <small id="nameHelp" className="text-red-500 font-semibold"></small>

                        <input type='text' id='emailText' placeholder='E-Mail' onChange={(e) => setemailValue(e.target.value)} className='shadow-xl rounded-md py-4 px-3 w-full text-white' style={{ backgroundColor: "#333333" }}></input>
                        <small id="emailHelp" className="text-red-500 font-semibold"></small>

                        <input type='text' id='passwordText' placeholder='Password' onChange={(e) => setpasswordValue(e.target.value)} className='shadow-xl rounded-md py-4 px-3 w-full text-white' style={{ backgroundColor: "#333333" }}></input>
                        <small id="passwordHelp" className="text-red-500 font-semibold"></small>

                        <div className='flex justify-between items-center px-3 py-3 rounded-md shadow-xl' style={{ backgroundColor: "#333333" }}>
                            <label className='hidden lg:block' style={{ color: "#9CA3A3" }}>Attch Image</label>
                            <FileBase64
                                type="file"
                                multiple={false}
                                isRequired
                                className="shadow-xl rounded-md py-4 px-3 w-full text-white"
                                onDone={({ base64 }) => setItem({ image: base64 })}
                            />
                        </div>

                    </div>

                    {/* Submit Button */}
                    <div><button type='button' className='shadow-xl rounded-md py-4 px-3 w-full bg-red-600 text-white' onClick={validateFields}>Sign Up</button></div>

                    {/* Footer */}
                    <div className='px-5'><hr></hr></div>

                    <div className='text-center'>
                        <p className='text-gray-500'>
                            Do you already have an account{" "}
                            <Link className='text-red-600 font-bold' to="/sign-in">
                                Sign in?
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
Signup.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(Signup);