import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
function Signin() {
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


                        {/* Heading */}
                        <div ><h2 className='text-white text-4xl font-bold'>Sign In</h2></div>


                        {/* Form */}
                        <div className='space-y-6'>
                            <input type='text' placeholder='E-Mail' className='shadow-xl rounded-md py-4 px-3 w-full text-white' style={{ backgroundColor: "#333333" }}></input>
                            <input type='text' placeholder='Password' className='shadow-xl rounded-md py-4 px-3 w-full text-white' style={{ backgroundColor: "#333333" }}></input>
                        </div>

                        {/* Submit Button */}
                        <div className='space-y-3'>
                            <Link to="/home"><button type='button' className='shadow-xl rounded-md py-4 px-3 w-full bg-red-600 text-white'>Sign In</button></Link>
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

export default Signin;