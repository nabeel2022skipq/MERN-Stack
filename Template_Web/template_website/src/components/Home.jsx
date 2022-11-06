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
function Home() {
    return (
        <React.Fragment>
            <ResNav></ResNav>
            <Header></Header>
            <AboutUs></AboutUs>
            <Feedback></Feedback>
            <Services></Services>
            <SubServices></SubServices>
            <Features></Features>
            <Team></Team>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default Home;