import React from 'react';
import { moviesList } from '../../data/Moviesdata';
import Slider from "react-slick";
import { BsArrowsFullscreen } from 'react-icons/bs'
import { Link } from 'react-router-dom';

function NewSeries() {
    const movies = moviesList.filter(m => m.category === "NewSeries")

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
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
        document.getElementById(m).classList.remove("hidden")
        document.getElementById(m).classList.add("block")
    }

    function handleMouseLeave(m) {
        document.getElementById(m).classList.add("hidden")
        document.getElementById(m).classList.remove("block")
    }

    function handleCheckHover(m, gifsrc) {
        document.getElementById(`image${m}`).src = gifsrc
    }
    function handleCheckHoveraway(m, imgsrc) {
        document.getElementById(`image${m}`).src = imgsrc
    }

    return (
        <React.Fragment>
            <div>
                <div className='mb-5' style={{ borderLeft: "15px solid #FF0000" }}>
                    <p className='text-2xl text-white px-10 py-5 font-extrabold'>Adventure</p>
                </div>
                <div className='container'>
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                    <style>{cssstyle}</style>
                    <Slider {...settings}>
                        {movies.map(m => (
                            <div onMouseOver={() => handleCheckHover(m._ID, m.gifsrc)} onMouseLeave={() => handleCheckHoveraway(m._ID, m.imgsrc)}>
                                <div className={`relative bg-black select-none cursor-pointer hover:transform hover:scale-105 hover:transition hover:ease-in-out hover:duration-700 duration-700 p-2 md:p-1`} id='card' onMouseOver={() => handleMouseOver(m._ID)} onMouseLeave={() => handleMouseLeave(m._ID)}>
                                    <div>
                                        <img id={`image${m._ID}`} className='w-full h-64 ' src={m.imgsrc} alt="newseries"></img>
                                    </div>
                                    <div className='text-white text-sm md:text-lg md:font-semibold py-2'>{m.title} | Official Trailer</div>
                                    <div className={`absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 hidden`} id={m._ID}>
                                        <Link to="/full-screen" state={{ currentVideo: m }}><button className='hover:animate-ping select-none cursor-pointer'><BsArrowsFullscreen size={40}></BsArrowsFullscreen></button></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div >
        </React.Fragment >
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
export default NewSeries;