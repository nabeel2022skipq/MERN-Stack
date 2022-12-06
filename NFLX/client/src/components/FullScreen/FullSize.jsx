import React from 'react';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { GoDiffAdded, GoDiffRemoved } from 'react-icons/go';
import { connect } from 'react-redux';
import PropTypes, { func } from 'prop-types'
import { useLocation } from 'react-router-dom';
import ResNav from '../Navbar/ResponsiveNav';
import VideoAbout from './VideoAbout';


function FullScreenVideo(props) {
    const [isPlaying, setisPlaying] = useState(false)
    const [isAdded, setisAdded] = useState(false)
    const location = useLocation();
    const { currentVideo } = location.state

    function handlePlay() {
        setisPlaying(true)
    }

    function handleAddToList() {
        setisAdded(true)
        let addMyNFXList = {
            "email": props.user.email,
            myFavouritesList: [
                {
                    "_ID": currentVideo._ID,
                    title: currentVideo.title,
                    "id": currentVideo.id,
                    "category": currentVideo.category,
                    "imgsrc": currentVideo.imgsrc,
                    "rating": currentVideo.rating,
                    "released": currentVideo.released,
                    "gifsrc": currentVideo.gifsrc,
                    "description": currentVideo.description
                }
            ]
        }
    }

    function handleRemoveFromList() {
        setisAdded(false)
        let removeMyNFXList = {
            "email": props.user.email,
            myFavouritesList: [
                {
                    "_ID": currentVideo._ID,
                    title: currentVideo.title,
                    "id": currentVideo.id,
                    "category": currentVideo.category,
                    "imgsrc": currentVideo.imgsrc,
                    "rating": currentVideo.rating,
                    "released": currentVideo.released,
                    "gifsrc": currentVideo.gifsrc,
                    "description": currentVideo.description
                }
            ]
        }

    }

    return (
        <React.Fragment>
            <div className='relative'>
                <div className={`${isPlaying ? "block bg-white bg-opacity-30 hover:bg-opacity-40" : "hidden"}`}>
                    <ResNav></ResNav>
                </div>
                {isPlaying ?

                    <div>
                        <iframe className='w-full h-screen' title={currentVideo.title}
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
                                {isAdded ?

                                    <button type='button' className='shadow-xl rounded-md py-2 md:py-5 px-6 lg:px-10 text-white border border-white hover:transform hover:scale-110 hover:transition hover:ease-in-out hover:duration-700 duration-700' style={{ backgroundColor: "transparent" }} onClick={handleRemoveFromList}><div className='flex items-center justify-center space-x-5'><GoDiffRemoved color='white' className='transform scale-150'></GoDiffRemoved><p>REMOVE</p></div></button>
                                    :
                                    <button type='button' className='shadow-xl rounded-md py-2 md:py-5 px-6 lg:px-10 text-white border border-white hover:transform hover:scale-110 hover:transition hover:ease-in-out hover:duration-700 duration-700' style={{ backgroundColor: "transparent" }} onClick={handleAddToList}><div className='flex items-center justify-center space-x-5'><GoDiffAdded color='white' className='transform scale-150'></GoDiffAdded><p>ADD</p></div></button>
                                }

                            </div>

                        </div>
                    </div>
                }
                <div className={`${isPlaying ? "hidden" : "absolute top-0 left-0 w-full"}`}>
                    <ResNav></ResNav>
                </div>
            </div>
        </React.Fragment>
    );
}

FullScreenVideo.propTypes = {
    user: PropTypes.object,
}
const mapDispatchToProps = {


}
function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullScreenVideo);