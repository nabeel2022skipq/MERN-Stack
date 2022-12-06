import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { FaPlay, FaPause, FaMarsDouble } from 'react-icons/fa';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { movies } from './MoviesList';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './header.css'
import ResNav from '../Navbar/ResponsiveNav';
function Header() {
    const [movieidx, setMovieIdx] = useState(0)
    const [isPlaying, setisPlaying] = useState(false)
    const [audio, setAudio] = useState(new Audio(movies[movieidx].audiosrc))

    const SettingIdx = useRef(audio)


    function nextImage() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        });
        if (movieidx < movies.length - 1) {
            setMovieIdx(movieidx + 1)
            if (isPlaying) {
                audio.pause();
                setisPlaying(false)
            }
            setAudio(new Audio(movies[movieidx + 1].audiosrc))
        }
        else if (movieidx === movies.length - 1) {
            setMovieIdx(0)
            if (isPlaying) {
                audio.pause();
                setisPlaying(false)
            }
            setAudio(new Audio(movies[0].audiosrc))
        }
    }

    function prevImage() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        });
        if (movieidx === 0) {
            setMovieIdx(movies.length - 1)
            if (isPlaying) {
                audio.pause();
                setisPlaying(false)
            }
            setAudio(new Audio(movies[movies.length - 1].audiosrc))
        }
        else {
            setMovieIdx(movieidx - 1)
            if (isPlaying) {
                audio.pause();
                setisPlaying(false)
            }
            setAudio(new Audio(movies[movieidx - 1].audiosrc))
        }
    }

    function handlePlay() {
        setisPlaying(true)
        audio.play();
        audio.loop = true
    }

    function handlePause() {
        setisPlaying(false)
        audio.pause();
    }

    function setIdx0() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        });
        setMovieIdx(0)
        if (isPlaying) {
            audio.pause();
            setisPlaying(false)
        }
        setAudio(new Audio(movies[0].audiosrc))
    }

    function setIdx1() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        });
        setMovieIdx(1)
        if (isPlaying) {
            audio.pause();
            setisPlaying(false)
        }
        setAudio(new Audio(movies[1].audiosrc))
    }

    function setIdx2() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        });
        setMovieIdx(2)
        if (isPlaying) {
            audio.pause();
            setisPlaying(false)
        }
        setAudio(new Audio(movies[2].audiosrc))
    }

    function setIdx3() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        });
        setMovieIdx(3)
        if (isPlaying) {
            audio.pause();
            setisPlaying(false)
        }
        setAudio(new Audio(movies[3].audiosrc))
    }

    useEffect(() => {
        SettingIdx.current = audio
    }, [audio])

    useEffect(() => {
        return () => {
            SettingIdx.current.pause();
        }
    }, [])

    return (
        <React.Fragment>
            <div className='relative'>
                <TransitionGroup className="header">
                    <CSSTransition key={movies[movieidx].id} timeout={800} classNames="fade">
                        <div className='relative'>
                            <div className='w-full h-screen select-none'>
                                <img src={isPlaying ? movies[movieidx].gifsrc : movies[movieidx].imgsrc} alt='header' className='object-cover w-full h-full blur-sm'></img>
                            </div>

                            <div className='absolute bottom-12 left-32 select-none space-y-7'>

                                <div>
                                    <h1 className='text-white font-bold text-5xl'>{movies[movieidx].title}</h1>
                                </div>

                                <div className='md:flex items-center space-x-2 text-lg xl:text-xl hidden'>
                                    <p className='text-black font-bold p-2 rounded-lg bg-yellow-400'>IMDb</p>
                                    <p className='text-white text-xl xl:text-2xl'> • {movies[movieidx].rating}</p>
                                </div>

                                <div>
                                    <p className='text-white text-sm lg:text-xl'>Release Date:  <b>{movies[movieidx].released}</b></p>
                                </div>

                                <div className='w-10/12 lg:w-1/2'>
                                    <p className='text-white text-sm xl:text-lg font-thin hidden md:block'>{movies[movieidx].description}</p>
                                </div>

                                <div>
                                    {isPlaying ? <button type='button' className='shadow-xl rounded-md py-2 md:py-5 px-6 lg:px-10 text-black hover:transform hover:scale-110 hover:transition hover:ease-in-out hover:duration-700 duration-700' style={{ backgroundColor: "white" }} onClick={handlePause}><div className='flex items-center justify-center space-x-5'><FaPause className='transform scale-150'></FaPause><p>STOP</p></div></button> : <button type='button' className='shadow-xl rounded-md py-2 md:py-5 px-6 lg:px-10 text-black hover:transform hover:scale-110 hover:transition hover:ease-in-out hover:duration-700 duration-700' style={{ backgroundColor: "white" }} onClick={handlePlay}><div className='flex items-center justify-center space-x-5'><FaPlay className='transform scale-150'></FaPlay><p>PLAY</p></div></button>}
                                </div>

                                <div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2'>
                                    <div className={`w-6 sm:w-12 h-1 ml-20 select-none cursor-pointer hover:bg-gray-200 hover:transform hover:scale-125 hover:transition hover:ease-in-out hover:duration-500 duration-500 sm:ml-60 md:ml-36 lg:ml-0 rounded-lg ${movieidx === 0 ? "bg-white" : "bg-gray-400"}`} onClick={setIdx0}></div>
                                    <div className={`w-6 sm:w-12 h-1 select-none cursor-pointer hover:bg-gray-200 hover:transform hover:scale-125 hover:transition hover:ease-in-out hover:duration-500 duration-500 rounded-lg ${movieidx === 1 ? "bg-white" : "bg-gray-400"}`} onClick={setIdx1}></div>
                                    <div className={`w-6 sm:w-12 h-1 select-none cursor-pointer hover:bg-gray-200 hover:transform hover:scale-125 hover:transition hover:ease-in-out hover:duration-500 duration-500 rounded-lg ${movieidx === 2 ? "bg-white" : "bg-gray-400"}`} onClick={setIdx2}></div>
                                    <div className={`w-6 sm:w-12 h-1 select-none cursor-pointer hover:bg-gray-200 hover:transform hover:scale-125 hover:transition hover:ease-in-out hover:duration-500 duration-500 rounded-lg ${movieidx === 3 ? "bg-white" : "bg-gray-400"}`} onClick={setIdx3}></div>
                                </div>
                            </div>
                            <div className='absolute top-1/2 left-2 transform -translate-x-0 -translate-y-1/2 cursor-pointer hover:scale-110 hover:transition hover:ease-in-out hover:duration-700 duration-700'>
                                <AiOutlineLeft size={60} color="white" onClick={prevImage}></AiOutlineLeft>
                            </div>
                            <div className='absolute top-1/2 right-2 transform translate-x-0 -translate-y-1/2 cursor-pointer hover:scale-110 hover:transition hover:ease-in-out hover:duration-700 duration-700'>
                                <AiOutlineRight size={60} color="white" onClick={nextImage}></AiOutlineRight>
                            </div>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
                <div className='w-full absolute top-0 left-0'>
                    <ResNav></ResNav>
                </div>
            </div>
        </React.Fragment >
    );
}

export default Header;