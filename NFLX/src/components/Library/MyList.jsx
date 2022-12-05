import { GoVerified } from 'react-icons/go'
import { moviesList } from '../../data/Moviesdata'
import ResNav from '../Navbar/ResponsiveNav'
import React from 'react';
function MyList() {
    function handleMouseOver(m, gifsrc) {
        document.getElementById(`img${m}`).src = gifsrc
    }
    function handleMouseLeave(m, imgsrc) {
        document.getElementById(`img${m}`).src = imgsrc
    }
    return (
        <React.Fragment>
            <ResNav></ResNav>
            <div>
                <div><h1 className='text-white p-5 text-3xl font-semibold'>My List</h1></div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3 px-5'>
                    {moviesList.map(m => (
                        <div>
                            <div className='text-white rounded-lg overflow-hidden cursor-pointer'>
                                <div>
                                    <img id={`img${m._ID}`} src={m.imgsrc} className='w-full h-64 hover:transform hover:scale-105 hover:transition hover:ease-in-out hover:duration-700 duration-700' onMouseOver={() => handleMouseOver(m._ID, m.gifsrc)} onMouseLeave={() => handleMouseLeave(m._ID, m.imgsrc)}></img>
                                </div>
                                <div>
                                    <div>
                                        <p className='text-lg mt-2'>{m.title}</p>
                                    </div>
                                    <div>
                                        <p className=' text-gray-400 inline-block'>Netflix</p>
                                        <GoVerified className='inline-block ml-2' color='white'></GoVerified>
                                    </div>
                                    <div>
                                        <small className='text-gray-400'>{`${Math.ceil((Math.random()) * 10)}.${Math.ceil((Math.random()) * 10)}M Views - ${Math.ceil((Math.random()) * 10)} weeks ago`}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}

export default MyList;