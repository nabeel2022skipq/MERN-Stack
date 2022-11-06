import React from 'react';
function AboutUs() {
    return (
        <React.Fragment>
            <div className='space-y-16 mt-32' id='aboutus'>
                <div className='flex justify-center items-center space-x-5 mt-10 select-none font-mono'>
                    <div className='bg-purple-500 w-20 h-1'></div>
                    <h1 className='text-gray-500 text-4xl uppercase font-extrabold transform hover:text-white hover:scale-110 transition ease-in-out duration-500'>About Us</h1>
                    <div className='bg-purple-500 w-20 h-1'></div>
                </div>

                <div className='grid space-y-5 md:grid-cols-2 md:space-y-0 text-gray-300'>
                    <div className='space-y-7 px-20'>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div>
                            <ul className='space-y-5'>
                                <li><svg class="inline-block h-6 w-6 flex-none fill-gray-900 stroke-purple-600 stroke-2 mx-3" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="11" />
                                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                                </svg>Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                <li><svg class="inline-block h-6 w-6 flex-none fill-fill-gray-900 stroke-purple-600 stroke-2 mx-3" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="11" />
                                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                                </svg>Duis aute irure dolor in reprehenderit in voluptate velit</li>
                                <li><svg class="inline-block h-6 w-6 flex-none fill-fill-gray-900 stroke-purple-600 stroke-2 mx-3" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="11" />
                                    <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
                                </svg>Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                            </ul>
                        </div>
                    </div>
                    <div className='space-y-7 px-20'>
                        <div>
                            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div>
                            <button className="border-2 border-purple-600  hover:bg-purple-600 p-3 w-32 rounded-full text-white transform hover:scale-110 transition ease-out duration-500">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default AboutUs;