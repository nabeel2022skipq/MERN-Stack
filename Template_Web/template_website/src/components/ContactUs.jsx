import React from 'react';
import * as TiIcons from 'react-icons/ti'
import * as HiIcons from 'react-icons/hi'
import { Fade } from 'react-awesome-reveal';
function ContactUs() {
    return (
        <div className='space-y-20' id='contactus'>
            <div className='flex justify-center items-center space-x-5 mt-32 font-mono select-none'>
                <div className='bg-purple-500 w-20 h-1'></div>
                <h1 className='text-gray-500 text-4xl uppercase font-extrabold transform hover:text-white hover:scale-110 transition ease-in-out duration-500'>Contact Us</h1>
                <div className='bg-purple-500 w-20 h-1'></div>
            </div>

            <Fade cascade damping={0.1} duration={2000}>
                <div className='grid lg:grid-cols-5 space-y-10 justify-center items-center lg:justify-start lg:items-start'>


                    <div className='lg:col-span-2 space-y-4 px-10'>

                        <div>
                            <h1 className='text-3xl text-gray-300 font-bold'>Lorem Ipsum</h1>
                        </div>

                        <div>
                            <p className='text-gray-500'>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
                        </div>

                        <div className='flex'>
                            <TiIcons.TiSocialTwitterCircular className='text-purple-600 w-10 h-10 transform hover:scale-125 cursor-pointer hover:transition ease-in-out duration-500'></TiIcons.TiSocialTwitterCircular>
                            <TiIcons.TiSocialFacebookCircular className='text-purple-600 w-10 h-10 transform hover:scale-125 cursor-pointer hover:transition ease-in-out duration-500'></TiIcons.TiSocialFacebookCircular>
                            <TiIcons.TiSocialLinkedinCircular className='text-purple-600 w-10 h-10 transform hover:scale-125 cursor-pointer hover:transition ease-in-out duration-500'></TiIcons.TiSocialLinkedinCircular>
                            <TiIcons.TiSocialInstagramCircular className='text-purple-600 w-10 h-10 transform hover:scale-125 cursor-pointer hover:transition ease-in-out duration-500'></TiIcons.TiSocialInstagramCircular>
                        </div>


                    </div>


                    <div className='lg:col-span-1 flex justify-start px-10 lg:px-0 items-center lg:justify-start lg:items-start'>

                        <div className='space-y-5'>
                            <div className='flex space-x-3 items-center'>
                                <TiIcons.TiLocationOutline className='text-purple-600 w-8 h-8 transform hover:scale-125 cursor-pointer hover:transition ease-in-out duration-500'></TiIcons.TiLocationOutline>
                                <p className='text-gray-500'>A108 your Street Your City</p>
                            </div>

                            <div className='flex space-x-3 items-center'>
                                <HiIcons.HiOutlineMail className='text-purple-600 w-8 h-8 transform hover:scale-125 cursor-pointer hover:transition ease-in-out duration-500'></HiIcons.HiOutlineMail>
                                <p className='text-gray-500'>info@example.com</p>
                            </div>

                            <div className='flex space-x-3 items-center'>
                                <TiIcons.TiPhoneOutline className='text-purple-600 w-8 h-8 transform hover:scale-125 cursor-pointer hover:transition ease-in-out duration-500'></TiIcons.TiPhoneOutline>
                                <p className='text-gray-500'>+92 123 5678901</p>
                            </div>
                        </div>


                    </div>


                    <div className='lg:col-span-2 px-10 '>

                        <div className='space-y-4'>
                            <div>
                                <input type='text' placeholder='Your Name' className='shadow-xl rounded-sm py-2 px-3 w-full bg-gray-900 border border-gray-500'></input>
                            </div>

                            <div>
                                <input type='email' placeholder='Your Email' className='shadow-xl rounded-sm py-2 px-3 w-full bg-gray-900 border border-gray-500'></input>
                            </div>

                            <div>
                                <input type='text' placeholder='Subject' className='shadow-xl rounded-sm py-2 px-3 w-full bg-gray-900 border border-gray-500'></input>
                            </div>

                            <div>
                                <textarea rows='5' placeholder='Message' className='shadow-xl rounded-sm py-2 px-3 w-full bg-gray-900 border border-gray-500 '></textarea>
                            </div>

                            <div className='flex justify-center items-center'>
                                <button className="border-2 border-purple-600  hover:bg-purple-600 p-3 w-32 rounded-full text-white transform hover:scale-110 transition ease-out duration-500">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div >
    );
}

export default ContactUs;