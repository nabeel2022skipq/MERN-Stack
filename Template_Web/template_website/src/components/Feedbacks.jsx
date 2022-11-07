import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Slide } from 'react-awesome-reveal';
function Feedback() {
    return (
        <div className='mt-20'>
            <div className='flex flex-col-reverse lg:grid lg:grid-cols-2'>


                <div className='flex justify-center items-center'>
                    <div className='grid space-y-7 md:grid-cols-2 md:space-x-10 md:space-y-0 px-14'>

                        <div className='space-y-7'>
                            <Fade cascade duration={2000} damping={0.1} triggerOnce>
                                <div className='space-y-3'>
                                    <h1 className='text-3xl font-bold text-white flex  items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 inline-block stroke-purple-600 mr-3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                    </svg>
                                        65</h1>
                                    <p className='text-sm text-gray-500'><b className='text-sm font-bold text-gray-400'>Happy Clients</b> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                                </div>
                                <div className='space-y-3'>
                                    <h1 className='text-3xl font-bold text-white flex  items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 inline-block stroke-purple-600 mr-3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                        18</h1>
                                    <p className='text-sm text-gray-500'><b className='text-sm font-bold text-gray-400'>Years of experience</b> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel.</p>
                                </div>
                            </Fade>

                        </div>

                        <div className='space-y-7'>
                            <Fade cascade duration={2000} damping={0.1} triggerOnce>
                                <div className='space-y-3'>
                                    <h1 className='text-3xl font-bold text-white flex  items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 inline-block stroke-purple-600 mr-3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                                    </svg>

                                        85</h1>
                                    <p className='text-sm text-gray-500'><b className='text-sm font-bold text-gray-400'>Projects</b> adipisci atque cum quia aspernatur totam laudantium et quia dere tan.</p>
                                </div>
                                <div className='space-y-3'>
                                    <h1 className='text-3xl font-bold text-white flex  items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-10 h-10 inline-block stroke-purple-600 mr-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                                    </svg>


                                        18</h1>
                                    <p className='text-sm text-gray-500'><b className='text-sm font-bold text-gray-400'>Awards</b> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der.</p>
                                </div>

                            </Fade>
                        </div>

                    </div>

                </div>

                <Fade duration={3000} triggerOnce>
                    <div className='mb-7 lg:mb-0'>
                        <div className='flex justify-center'>
                            <img src='https://webngfx.com/wp-content/uploads/2021/11/website-development.svg' alt='feedbackslogo' className='w-auto h-72 lg:w-auto lg:h-96 animate-fade-in-down select-none cursor-pointer'></img>
                        </div>
                    </div>
                </Fade>




            </div>
        </div >
    );
}

export default Feedback;