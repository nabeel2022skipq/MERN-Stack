import React from 'react';
import { Fade } from 'react-awesome-reveal';
function Pricing() {
    return (
        <div className='space-y-6' id='pricing'>
            <div>
                <div className='flex justify-center items-center space-x-5 mt-32 font-mono select-none'>
                    <div className='bg-purple-500 w-20 h-1'></div>
                    <h1 className='text-gray-500 text-4xl uppercase font-extrabold transform hover:text-white hover:scale-110 transition ease-in-out duration-500'>Pricing</h1>
                    <div className='bg-purple-500 w-20 h-1'></div>
                </div>
                <div className='text-gray-500 text-center py-3'><p>Magnam dolores commodi suscipit eius consequatur ex aliquid fug</p></div>
            </div>

            <div className='grid lg:grid-cols-3 gap-5 px-5 cursor-pointer'>
                <Fade cascade damping={0.1} triggerOnce>
                    <div>

                        <div className='bg-gray-900 rounded-md shadow-lg hover:bg-gray-800 transform hover:scale-105 hover:shadow-2xl transition ease-in-out duration-700 cursor-pointer hover:border-b-2 border-purple-500 overflow-hidden'>

                            <div className='text-center py-10'>
                                <div className='space-y-5'>
                                    <div>
                                        <h1 className='text-gray-300 text-2xl font-bold'>Free</h1>
                                    </div>

                                    <div className='text-gray-500'><p><span className='text-3xl text-purple-500 font-semibold'>$0</span> /month</p></div>
                                </div>

                                <div className='text-gray-400 space-y-3 py-7'>
                                    <p>Aida dere</p>
                                    <p>Nec feugiat nisl</p>
                                    <p>Nulla at volutpat dola</p>
                                    <p className='line-through text-gray-500'>Pharetra massa</p>
                                    <p className='line-through text-gray-500'>Massa ultricies mi</p>
                                </div>

                                <div>
                                    <div className='select-none cursor-pointer'>
                                        <button className="border-2 border-purple-600  hover:bg-purple-600 p-3 w-32 rounded-full text-white transform hover:scale-110 transition ease-out duration-500">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>

                        <div className='bg-gray-900 rounded-md shadow-lg border-2 border-purple-600 hover:bg-gray-800 transform hover:scale-105 hover:shadow-2xl transition ease-in-out duration-700 cursor-pointer overflow-hidden'>

                            <div className='text-center py-10'>
                                <div className='space-y-5'>
                                    <div>
                                        <h1 className='text-gray-300 text-2xl font-bold'>Business</h1>
                                    </div>

                                    <div className='text-gray-500'><p><span className='text-3xl text-purple-500 font-semibold'>$19</span> /month</p></div>
                                </div>

                                <div className='text-gray-400 space-y-3 py-7'>
                                    <p>Aida dere</p>
                                    <p>Nec feugiat nisl</p>
                                    <p>Nulla at volutpat dola</p>
                                    <p className='line-through text-gray-500'>Pharetra massa</p>
                                    <p className='line-through text-gray-500'>Massa ultricies mi</p>
                                </div>

                                <div>
                                    <div className='select-none cursor-pointer'>
                                        <button className="bg-purple-600  p-3 w-32 rounded-full text-white transform hover:scale-110 transition ease-out duration-500">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>

                        <div className='bg-gray-900 rounded-md shadow-lg hover:bg-gray-800 transform hover:scale-105 hover:shadow-2xl transition ease-in-out duration-700 cursor-pointer hover:border-b-2 border-purple-500 overflow-hidden'>

                            <div className='text-center py-10'>
                                <div className='space-y-5'>
                                    <div>
                                        <h1 className='text-gray-300 text-2xl font-bold'>Developer</h1>
                                    </div>

                                    <div className='text-gray-500'><p><span className='text-3xl text-purple-500 font-semibold'>$29</span> /month</p></div>
                                </div>

                                <div className='text-gray-400 space-y-3 py-7'>
                                    <p>Aida dere</p>
                                    <p>Nec feugiat nisl</p>
                                    <p>Nulla at volutpat dola</p>
                                    <p className='line-through text-gray-500'>Pharetra massa</p>
                                    <p className='line-through text-gray-500'>Massa ultricies mi</p>
                                </div>

                                <div>
                                    <div className='select-none cursor-pointer'>
                                        <button className="border-2 border-purple-600  hover:bg-purple-600 p-3 w-32 rounded-full text-white transform hover:scale-110 transition ease-out duration-500">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>

            </div>
        </div>
    );
}

export default Pricing;