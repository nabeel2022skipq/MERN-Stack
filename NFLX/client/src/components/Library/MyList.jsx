import { GoVerified } from 'react-icons/go'
import { moviesList } from '../../data/Moviesdata'
import ResNav from '../Navbar/ResponsiveNav'
import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { func } from 'prop-types'
import { getFavourites, RemoveFromFavourites } from '../../actions/myListActions';
import { useEffect } from 'react';
import NothingtoShow from '../Empty/Nothing';
import { MdFullscreen } from 'react-icons/md'
import { Link } from 'react-router-dom';

function MyList(props) {
    let favsMovies
    function handleMouseOver(m, gifsrc) {
        document.getElementById(`img${m}`).src = gifsrc
        document.getElementById(m).classList.remove("hidden")
        document.getElementById(m).classList.add("block")
    }
    function handleMouseLeave(m, imgsrc) {
        document.getElementById(`img${m}`).src = imgsrc
        document.getElementById(m).classList.add("hidden")
        document.getElementById(m).classList.remove("block")
    }


    function handleRemoveFromList(m) {
        let removeMyNFXList = {
            "email": props.user.email,
            myFavouritesList: [
                {
                    "_ID": m._ID,
                    title: m.title,
                    "id": m.id,
                    "category": m.category,
                    "imgsrc": m.imgsrc,
                    "rating": m.rating,
                    "released": m.released,
                    "gifsrc": m.gifsrc,
                    "description": m.description
                }
            ]
        }
        props.RemoveFromFavourites(removeMyNFXList)
        console.log(props.favourites)
    }
    useEffect(() => {
        props.getFavourites();
    }, [])
    return (
        <React.Fragment>
            <div>
                <div className='mb-5 mt-16' style={{ borderLeft: "15px solid #FF0000" }}><p className='text-2xl text-white px-10 py-5 font-extrabold'>My List </p></div>
                {props.favourites.favourites.filter(l => l.email === props.user.email).length === 0 ? <NothingtoShow></NothingtoShow> :
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3 px-5'>
                        {props.favourites.favourites.filter(l => l.email === props.user.email)[0].myFavouritesList.map(m => (
                            <div>
                                <div className='text-white rounded-lg overflow-hidden cursor-pointer relative' onMouseOver={() => handleMouseOver(m._ID, m.gifsrc)} onMouseLeave={() => handleMouseLeave(m._ID, m.imgsrc)}>
                                    <div>
                                        <img id={`img${m._ID}`} src={m.imgsrc} className='w-full h-64 hover:transform hover:scale-105 hover:transition hover:ease-in-out hover:duration-700 duration-700'></img>
                                        <Link to="/full-screen" state={{ currentVideo: m }}><button className='absolute top-52 right-4 hover:animate-ping select-none cursor-pointer'><MdFullscreen size={35} style={{ fontWeight: 'bold' }}></MdFullscreen></button></Link>
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
                                    <div className='bg-black bg-opacity-70 absolute top-1 right-2 rounded-md hidden' id={m._ID} onClick={() => handleRemoveFromList(m)}>
                                        <p className='p-2 text-gray-300'>Remove from List</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }
                <div className='absolute w-full top-0 left-0'><ResNav></ResNav></div>
            </div>
        </React.Fragment>
    );
}

MyList.propTypes = {
    user: PropTypes.object,
    favourites: PropTypes.object,
    getFavourites: PropTypes.func,
    RemoveFromFavourites: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
    getFavourites,
    RemoveFromFavourites
}

function mapStateToProps(state) {
    return {
        user: state.auth.user,
        favourites: state.list
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyList);