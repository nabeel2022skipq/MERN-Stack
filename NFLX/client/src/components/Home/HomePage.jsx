import React from 'react';
import introSound from './Audios/Netflix-Intro-Sound-Effect.mp3'
import Welcome from 'react-welcome-page'
import Header from './Header';
import { useEffect } from 'react';
import MoviesMain from '../MoviesCategory/MoviesMain';
import Footer from '../Footer';
function HomePage() {

    function playIntro() {
        var audio = new Audio(introSound);
        audio.play();
        audio.pause();
        setTimeout(function () {
            audio.play();
        }, 500);
    }

    useEffect(() => {
        playIntro()
    })
    return (
        <div>
            <Welcome
                loopDuration={4000}
                data={[
                    {
                        image: require('./Images/applogo.png'),
                        imageAnimation: 'zoomIn',
                        backgroundColor: 'black',
                        text: ''
                    }
                ]}
            />

            <Header></Header>
            <br></br>
            <MoviesMain></MoviesMain>
            <Footer></Footer>
        </div>
    );
}

export default HomePage;