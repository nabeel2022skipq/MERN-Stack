import React, { useState } from 'react';
import Slider from "react-slick";
import { FaRegPlayCircle, FaRegPauseCircle } from 'react-icons/fa'

function UpcomingMovies() {
    const [vidPlying, setVidPlying] = useState(false)
    const movies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const settings = {
        dots: false,
        infinite: false,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };

    function handleMouseOver(m) {
        console.log(m)
        document.getElementById(m).classList.remove("hidden")
        document.getElementById(m).classList.add("block")
    }

    function handleMouseLeave(m) {
        document.getElementById(m).classList.add("hidden")
        document.getElementById(m).classList.remove("block")
    }
    function handleClickplay(m) {
        document.getElementById(`video${m}`).play();
        setVidPlying(true)
    }
    function handleClickpause(m) {
        document.getElementById(`video${m}`).pause();
        setVidPlying(false)
    }
    return (

        <React.Fragment>
            <div>
                <div style={{ borderLeft: "15px solid #FF0000" }}>
                    <p className='text-2xl text-white px-10 py-5 font-extrabold'>Upcoming</p>
                </div>
                <div className='container'>
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                    <style>{cssstyle}</style>
                    <Slider {...settings}>
                        {movies.map(m => (
                            <div className={`relative bg-black rounded-lg hover:transform hover:scale-105 hover:transition hover:ease-in-out hover:duration-700 duration-700 p-2 md:p-1`} id='card' onMouseOver={() => handleMouseOver(m)} onMouseLeave={() => handleMouseLeave(m)}>
                                <div>
                                    <video id={`video${m}`} controls="controls" preload='none' className='w-full' poster="https://assets.codepen.io/32795/poster.png">
                                        <source id='mp4' src="http://media.w3.org/2010/05/sintel/trailer.mp4" type='video/mp4' />
                                        <source id='webm' src="http://media.w3.org/2010/05/sintel/trailer.webm" type='video/webm' />
                                        <source id='ogv' src="http://media.w3.org/2010/05/sintel/trailer.ogv" type='video/ogg' />
                                        <track kind="subtitles" label="English subtitles" src="subtitles_en.vtt" srcLang="en" default>
                                        </track>
                                        <track kind="subtitles" label="Deutsche Untertitel" src="subtitles_de.vtt" srcLang="de">
                                        </track>
                                        <p>Your user agent does not support the HTML5 Video element.</p>
                                    </video>
                                </div>
                                <div className='text-white text-sm md:text-lg md:font-semibold py-2'>All of Us are dead</div>
                                <div className={`absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 hidden`} id={m}>
                                    {vidPlying ? <button><FaRegPauseCircle size={70} onClick={() => handleClickpause(m)}></FaRegPauseCircle></button> : <button><FaRegPlayCircle size={70} onClick={() => handleClickplay(m)}></FaRegPlayCircle></button>}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </React.Fragment>
    );
}

const cssstyle = `
.container {
    margin: 0 auto;
    padding: 0px 40px 40px 40px;
  }
  #card {
    background: black;
    color: #fff;
}
.slick-next:before, .slick-prev:before {
    color: #fff;
}
`
export default UpcomingMovies;