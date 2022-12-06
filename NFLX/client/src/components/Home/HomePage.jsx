import React from 'react';
import introSound from './Audios/Netflix-Intro-Sound-Effect.mp3'
import Welcome from 'react-welcome-page'
import Header from './Header';
import { useEffect } from 'react';
import MoviesMain from '../MoviesCategory/MoviesMain';
import Footer from '../Footer';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
import { loadUser } from '../../actions/authActions';
function HomePage(props) {
    const navigate = useNavigate();

    function playIntro() {
        var audio = new Audio(introSound);
        audio.play();
        audio.pause();
        setTimeout(function () {
            audio.play();
        }, 500);
    }

    useEffect(() => {
        if (!props.isAuthenticated) {
            navigate('/sign-up');
        }
        playIntro()
    }, [])
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

HomePage.propTypes = {
    isAuthenticated: PropTypes.bool,
    token: PropTypes.string.isRequired,
    loadUser: PropTypes.func.isRequired
}

const mapDispatchToProps = {
    loadUser
}
function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        token: state.auth.token
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);