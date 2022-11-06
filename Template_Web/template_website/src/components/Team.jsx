import React from 'react';
function Team() {
    return (
        <div className="mt-20">
            <div>
                <div className='flex justify-center items-center space-x-5 mt-16 font-mono select-none'>
                    <div className='bg-purple-500 w-20 h-1'></div>
                    <h1 className='text-gray-500 text-4xl uppercase font-extrabold transform hover:text-white hover:scale-110 transition ease-in-out duration-500'>Team</h1>
                    <div className='bg-purple-500 w-20 h-1'></div>
                </div>
                <div className='text-gray-500 text-center py-3'><p>Magnam dolores commodi suscipit eius consequatur ex aliquid fug</p></div>
            </div>
            <div className="grid gap-y-28 lg:grid-cols-3 lg:gap-x-5 px-14 mt-28">
                <div>
                    <div className="shadow-2xl bg-gray-900 rounded-lg transform hover:scale-105 transition ease-in-out duration-700">
                        {/* <div class=" text-white h-28 sm:h-36 md:h-44 lg:h-28" style={{ backgroundColor: "#1a202c" }}> </div> */}
                        <div className="flex justify-center">
                            <img src="https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png" alt='teamphotos' className="w-36 rounded-full border-8 border-purple-800 shadow-md transform hover:scale-110 animation ease-in-out duration-300" style={{ marginTop: "-75px" }}></img>
                        </div>
                        <div className="text-center py-2">
                            <h1 className="text-xl text-purple-600 font-bold pb-1">Nabee Ahmad</h1>
                            <p className="text-sm text-slate-400">MERN Stack Developer at <b>SkipQ</b></p>
                        </div>
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <p className="text-sm text-slate-200">Lahore, <b>Pakistan</b></p>
                        </div>

                        <div className="flex justify-between px-14 py-8 sm:py-8 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-5 h-5 sm:w-8 sm:h-8 hover:animate-bounce cursor-pointer"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>


                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 sm:w-8 sm:h-8 hover:animate-bounce cursor-pointer"><path fill="currentColor" d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z" /></svg>


                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 sm:w-8 sm:h-8 hover:animate-bounce cursor-pointer"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>


                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-5 h-5 sm:w-8 sm:h-8 hover:animate-bounce cursor-pointer"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                        </div>
                        <div className="flex justify-center space-x-10 p-7">
                            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 w-28 rounded-full text-white transform hover:scale-110 transition ease-out duration-500">Message</button>
                            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 w-28 rounded-full text-white transform hover:scale-110 transition ease-out duration-500">Follow</button>

                        </div>
                    </div>
                </div>

                <div>
                    <div className="shadow-2xl bg-gray-900 rounded-lg  transform hover:scale-105 transition ease-in-out duration-700">
                        {/* <div class=" text-white h-28 sm:h-36 md:h-44 lg:h-28" style={{ backgroundColor: "#1a202c" }}> </div> */}
                        <div className="flex justify-center">
                            <img src="https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png" alt='teamphotos' className="w-36 rounded-full border-8 border-purple-800 shadow-md transform hover:scale-110 animation ease-in-out duration-300" style={{ marginTop: "-75px" }}></img>
                        </div>
                        <div className="text-center py-2">
                            <h1 className="text-xl text-purple-600 font-bold pb-1">Nabee Ahmad</h1>
                            <p className="text-sm text-slate-400">MERN Stack Developer at <b>SkipQ</b></p>
                        </div>
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <p className="text-sm text-slate-200">Lahore, <b>Pakistan</b></p>
                        </div>


                        <div className="flex justify-between px-14 py-8 sm:py-6 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-5 h-5 sm:w-8 sm:h-8 hover:animate-bounce cursor-pointer"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>


                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 sm:w-8 sm:h-8 hover:animate-bounce cursor-pointer"><path fill="currentColor" d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z" /></svg>


                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 sm:w-8 sm:h-8 hover:animate-bounce cursor-pointer"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>


                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-5 h-5 sm:w-8 sm:h-8 hover:animate-bounce cursor-pointer"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                        </div>
                        <div className="flex justify-center space-x-10 p-7">
                            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 w-28 rounded-full text-white transform hover:scale-110 transition ease-out duration-500">Message</button>
                            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 w-28 rounded-full text-white transform hover:scale-110 transition ease-out duration-500">Follow</button>

                        </div>
                    </div>
                </div>

                <div>
                    <div className="shadow-2xl bg-gray-900 rounded-lg  transform hover:scale-105 transition ease-in-out duration-700">
                        {/* <div class=" text-white h-28 sm:h-36 md:h-44 lg:h-28" style={{ backgroundColor: "#1a202c" }}> </div> */}
                        <div className="flex justify-center">
                            <img src="https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png" alt='teamphotos' className="w-36 rounded-full border-8 border-purple-800 shadow-md transform hover:scale-110 animation ease-in-out duration-300" style={{ marginTop: "-75px" }}></img>
                        </div>
                        <div className="text-center py-2">
                            <h1 className="text-xl text-purple-600 font-bold pb-1">Nabee Ahmad</h1>
                            <p className="text-sm text-slate-400">MERN Stack Developer at <b>SkipQ</b></p>
                        </div>
                        <div className="flex justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <p className="text-sm text-slate-200">Lahore, <b>Pakistan</b></p>
                        </div>


                        <div className="flex justify-between px-14 py-8 sm:py-6 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-5 h-5 sm:w-8 sm:h-8 hover:animate-bounce cursor-pointer"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>


                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 sm:w-8 sm:h-8 hover:animate-bounce cursor-pointer"><path fill="currentColor" d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z" /></svg>


                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 sm:w-8 sm:h-8 hover:animate-bounce cursor-pointer"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>


                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-5 h-5 sm:w-8 sm:h-8 hover:animate-bounce cursor-pointer"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                        </div>
                        <div className="flex justify-center space-x-10 p-7">
                            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 w-28 rounded-full text-white transform hover:scale-110 transition ease-out duration-500">Message</button>
                            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 w-28 rounded-full text-white transform hover:scale-110 transition ease-out duration-500">Follow</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team
