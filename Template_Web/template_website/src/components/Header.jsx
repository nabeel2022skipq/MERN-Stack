import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";
function Header() {
    return (
        <React.Fragment>
            <div className='mt-40'>
                <div className='grid md:grid-cols-2'>

                    <Fade duration={3000} triggerOnce>
                        <div>
                            <div className='flex justify-center'>
                                <img src='https://www.multi-techno.com/wp-content/uploads/2022/03/aboutus.png' alt='headerlogo' className='w-auto h-72 lg:w-auto lg:h-96 animate-fade-in-down select-none cursor-pointer'></img>
                            </div>
                        </div>
                    </Fade>

                    <div className='flex flex-col items-start justify-center'>
                        <Fade duration={2000} cascade damping={0.1} triggerOnce>
                            <div className='mx-10 mt-10 space-y-5 md:px-0 select-none cursor-pointer'>

                                <h1 className='text-4xl md:text-5xl font-bold font-serif text-white '>Grow Your Business with <div className='inline-block mt-3'><h1 className=' overflow-hidden w-0 whitespace-nowrap animate-typing'>MERN STACK</h1></div></h1>
                                <p className='text-gray-500 text-xl md:text-2xl hover:text-gray-400'>We are team of talented designers making websites <br></br>with <b className='hover:text-purple-500'>MERN Stack</b></p>
                            </div>
                            <div className='p-10 select-none cursor-pointer'>
                                <button className="border-2 border-purple-600  hover:bg-purple-600 p-3 w-32 rounded-full text-white transform hover:scale-110 transition ease-out duration-500">Get Started</button>
                            </div>
                        </Fade>

                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}

export default Header;