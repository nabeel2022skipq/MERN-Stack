import { GoVerified } from 'react-icons/go'
import { moviesList } from '../../data/Moviesdata'
import ResNav from '../Navbar/ResponsiveNav'
import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { func } from 'prop-types'
import { getFavourites } from '../../actions/myListActions';
import { useEffect } from 'react';
import NothingtoShow from '../Empty/Nothing';

function MyList(props) {
    let favsMovies
    function handleMouseOver(m, gifsrc) {
        document.getElementById(`img${m}`).src = gifsrc
    }
    function handleMouseLeave(m, imgsrc) {
        document.getElementById(`img${m}`).src = imgsrc
    }

    let cur_user = props.favourites.filter(l => l.email === props.user.email)
    if (cur_user.length > 0) {
        favsMovies = cur_user[0].myFavouritesList
    }
    useEffect(() => {
        props.getFavourites();
    }, [])
    return (
        <React.Fragment>
            <ResNav></ResNav>
            <div>
                <div className='mb-5' style={{ borderLeft: "15px solid #FF0000" }}><p className='text-2xl text-white px-10 py-5 font-extrabold'>My List </p></div>
                {favsMovies.length === 0 ? <NothingtoShow></NothingtoShow> : null}
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3 px-5'>
                    {favsMovies.map(m => (
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

MyList.propTypes = {
    user: PropTypes.object,
    favourites: PropTypes.object,
    getFavourites: PropTypes.func
}

const mapDispatchToProps = {
    getFavourites
}

function mapStateToProps(state) {
    return {
        user: state.auth.user,
        favourites: state.list.favourites
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyList);