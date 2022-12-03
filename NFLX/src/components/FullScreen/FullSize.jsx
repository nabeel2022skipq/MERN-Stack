import React from 'react';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import VideoAbout from './VideoAbout';

function FullScreenVideo() {
    const [isPlaying, setisPlaying] = useState(false)
    const location = useLocation();
    const { currentVideo } = location.state

    function handlePlay() {
        setisPlaying(true)
    }

    return (
        <React.Fragment>
            <div>
                {isPlaying ?

                    <div>
                        <iframe className='w-full h-screen'
                            src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1`} allowFullScreen>
                        </iframe>
                    </div>
                    :

                    <div className='relative'>
                        <div className='w-full h-screen select-none'>
                            <img src={currentVideo.gifsrc} alt='header' className='object-cover w-full h-full blur-md'></img>
                        </div>

                        <div id='largepage' className='absolute bottom-12 left-32 select-none space-y-7'>

                            <div>
                                <h1 className='text-white font-bold text-5xl'>{currentVideo.title}</h1>
                            </div>

                            <div className='md:flex items-center space-x-2 text-lg xl:text-xl hidden'>
                                <p className='text-black font-bold p-2 rounded-lg bg-yellow-400'>IMDb</p>
                                <p className='text-white text-xl xl:text-2xl'> • {currentVideo.rating}</p>
                            </div>

                            <div>
                                <p className='text-white text-sm lg:text-xl'>Release Date:  <b>{currentVideo.released}</b></p>
                            </div>

                            <div className='w-10/12 lg:w-1/2'>
                                <p className='text-white text-sm xl:text-lg hidden md:block'>{currentVideo.description}</p>
                            </div>

                            <div className='flex space-x-4'>
                                <button type='button' className='shadow-xl rounded-md py-2 md:py-5 px-6 lg:px-10 text-black hover:transform hover:scale-110 hover:transition hover:ease-in-out hover:duration-700 duration-700' style={{ backgroundColor: "white" }} onClick={handlePlay}><div className='flex items-center justify-center space-x-5'><FaPlay className='transform scale-150'></FaPlay><p>PLAY</p></div></button>
                                <VideoAbout currvid={currentVideo}></VideoAbout>
                            </div>

                        </div>
                    </div>
                }
            </div>
        </React.Fragment>
    );
}

export default FullScreenVideo;