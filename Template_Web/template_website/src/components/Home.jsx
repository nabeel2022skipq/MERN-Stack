import React from 'react';
import AboutUs from './About';
import Features from './Features';
import Feedback from './Feedbacks';
import Footer from './Footer';
import Header from './Header';
import ResNav from './ResponsiveNav';
import Services from './Services';
import SubServices from './SubServices';
import Team from './Team';
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import { Flip } from "react-awesome-reveal";
import { Hinge } from "react-awesome-reveal";
import { JackInTheBox } from "react-awesome-reveal";
import { Roll } from "react-awesome-reveal";
import { Rotate } from "react-awesome-reveal";
function Home() {
    return (
        <React.Fragment>
            <ResNav></ResNav>
            <Header></Header>
            <AboutUs></AboutUs>
            <Feedback></Feedback>
            <Services></Services>
            <Fade><SubServices></SubServices></Fade>
            <Features></Features>
            <Slide triggerOnce><Team></Team></Slide>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default Home;