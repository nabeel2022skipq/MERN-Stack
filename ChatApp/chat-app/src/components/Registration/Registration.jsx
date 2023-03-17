import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import './registration.css'
import login from '../../assets/logo.svg'
import register from '../../assets/register.svg'
import { Button, useToast } from '@chakra-ui/react';
function Registration() {

    const toast = useToast()

    const [loginemail, setloginemail] = useState('')
    const [loginpassword, setloginpassword] = useState('')

    const [signupusername, setsignupusername] = useState('')
    const [signupemail, setsignupemail] = useState('')
    const [signuppassword, setsignuppassword] = useState('')

    const validateLogin = () => {

        if (loginemail) {
            if ((!loginpassword) && !(loginemail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) {
                toast({
                    description: "Please fill all fields.",
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                    position: "top-left",
                    variant: "left-accent"
                })

                toast({
                    description: "Please enter valid email..",
                    status: 'warning',
                    duration: 2000,
                    isClosable: true,
                    position: "top-left",
                    variant: "left-accent"
                })
            }

            else if ((!loginpassword) && (loginemail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) {
                toast({
                    description: "Please fill all fields.",
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                    position: "top-left",
                    variant: "left-accent"
                })
            }
            else if (loginpassword && !(loginemail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) {
                toast({
                    description: "Please enter valid email..",
                    status: 'warning',
                    duration: 2000,
                    isClosable: true,
                    position: "top-left",
                    variant: "left-accent"
                })
            }
            else {
                toast({
                    title: "Successfully Logged In",
                    description: "You've successfully logged in to your account.",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: "top-left",
                    variant: "left-accent"
                })
            }
        }
        else {
            if (!loginemail || !loginpassword) {
                toast({
                    description: "Please fill all fields.",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: "top-left",
                    variant: "left-accent"
                })
            }
        }
    }

    const validateSignup = () => {

        if (signupemail) {
            if ((!signupusername || !signuppassword) && !(signupemail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) {
                toast({
                    description: "Please fill all fields.",
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                    position: "top-left",
                    variant: "left-accent"
                })

                toast({
                    description: "Please enter valid email..",
                    status: 'warning',
                    duration: 2000,
                    isClosable: true,
                    position: "top-left",
                    variant: "left-accent"
                })
            }

            else if ((!signupusername || !signuppassword) && (signupemail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) {
                toast({
                    description: "Please fill all fields.",
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                    position: "top-left",
                    variant: "left-accent"
                })
            }
            else if (signupusername && signuppassword && !(signupemail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) {
                toast({
                    description: "Please enter valid email..",
                    status: 'warning',
                    duration: 2000,
                    isClosable: true,
                    position: "top-left",
                    variant: "left-accent"
                })
            }
            else {
                toast({
                    title: "Successfully Signed Up",
                    description: "We have created your account.",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: "top-left",
                    variant: "left-accent"
                })
            }
        }
        else {
            if (!signupemail || !signuppassword || !signupusername) {
                toast({
                    description: "Please fill all fields.",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: "top-left",
                    variant: "left-accent"
                })
            }
        }

    }

    return (
        <React.Fragment>
            <div class="container">
                <div class="forms-container">
                    <div class="signin-signup">
                        <form action="#" class="sign-in-form">
                            <h2 class="title">Sign in</h2>
                            <div class="input-field">
                                <center style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><FontAwesomeIcon className='input-field-icon' icon={faEnvelope} /></center>
                                <input type="text" placeholder="Email" onChange={e => setloginemail(e.target.value)} />
                            </div>
                            <div class="input-field">
                                <center style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><FontAwesomeIcon className='input-field-icon' icon={faLock} /></center>
                                <input type="password" placeholder="Password" onChange={e => setloginpassword(e.target.value)} />
                            </div>
                            <Button className="btn solid" size='lg' colorScheme={'twitter'} borderRadius={50} onClick={validateLogin}>
                                Login
                            </Button>
                            <p class="social-text">Or Sign in with social platforms</p>
                            <div class="social-media">
                                <a href="#" class="social-icon">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="#" class="social-icon">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="#" class="social-icon">
                                    <FontAwesomeIcon icon={faGoogle} />
                                </a>
                                <a href="#" class="social-icon">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                        </form>
                        <form action="#" class="sign-up-form">
                            <h2 class="title">Sign up</h2>
                            <div class="input-field">
                                <center style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><FontAwesomeIcon className='input-field-icon' icon={faUser} /></center>
                                <input type="text" placeholder="Username" onChange={e => setsignupusername(e.target.value)} />
                            </div>
                            <div class="input-field">
                                <center style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><FontAwesomeIcon className='input-field-icon' icon={faEnvelope} /></center>
                                <input type="email" placeholder="Email" onChange={e => setsignupemail(e.target.value)} />
                            </div>
                            <div class="input-field">
                                <center style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><FontAwesomeIcon className='input-field-icon' icon={faLock} /></center>
                                <input type="password" placeholder="Password" onChange={e => setsignuppassword(e.target.value)} />
                            </div>
                            <Button className="btn solid" size='lg' colorScheme={'twitter'} borderRadius={50} onClick={validateSignup}>
                                Sign up
                            </Button>
                            <p class="social-text">Or Sign up with social platforms</p>
                            <div class="social-media">
                                <a href="#" class="social-icon">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="#" class="social-icon">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="#" class="social-icon">
                                    <FontAwesomeIcon icon={faGoogle} />
                                </a>
                                <a href="#" class="social-icon">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="panels-container">
                    <div class="panel left-panel">
                        <div class="content">
                            <h3>New here ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <button class="btn transparent" id="sign-up-btn" onClick={() => { document.querySelector(".container").classList.add("sign-up-mode") }}>
                                Sign up
                            </button>
                        </div>
                        <img src={login} class="image" alt="" />
                    </div>
                    <div class="panel right-panel">
                        <div class="content">
                            <h3>One of us ?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
                            </p>
                            <button class="btn transparent" id="sign-in-btn" onClick={() => { document.querySelector(".container").classList.remove("sign-up-mode") }}>
                                Sign in
                            </button>
                        </div>
                        <img src={register} class="image" alt="" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Registration;