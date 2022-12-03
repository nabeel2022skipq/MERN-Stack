import React from 'react';
import ActionMovies from './Action';
import NewSeries from './NewSeries';
import TopRated from './TopRated';
import TrailerMovies from './Trailers';
import UpcomingMovies from './Upcoming';
function MoviesMain() {
    return (
        <React.Fragment>
            <TrailerMovies></TrailerMovies>
            <br></br>
            <NewSeries></NewSeries>
            <br></br>
            <ActionMovies></ActionMovies>
            <br></br>
            <TopRated></TopRated>
            {/* <UpcomingMovies></UpcomingMovies> */}
            <br></br>
        </React.Fragment>
    );
}

export default MoviesMain;