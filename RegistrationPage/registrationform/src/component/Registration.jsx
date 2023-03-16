import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import './stylesheet/styles.css'
import login from './assets/logo.svg'
import register from './assets/register.svg'
function RegistrationForm() {
    return (
        <React.Fragment>
            <div class="container">
                <div class="forms-container">
                    <div class="signin-signup">
                        <form action="#" class="sign-in-form">
                            <h2 class="title">Sign in</h2>
                            <div class="input-field">
                                <center style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><FontAwesomeIcon className='input-field-icon' icon={faUser} /></center>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div class="input-field">
                                <center style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><FontAwesomeIcon className='input-field-icon' icon={faLock} /></center>
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" value="Login" class="btn solid" />
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
                                <input type="text" placeholder="Username" />
                            </div>
                            <div class="input-field">
                                <center style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><FontAwesomeIcon className='input-field-icon' icon={faEnvelope} /></center>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div class="input-field">
                                <center style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><FontAwesomeIcon className='input-field-icon' icon={faLock} /></center>
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" class="btn" value="Sign up" />
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

export default RegistrationForm;