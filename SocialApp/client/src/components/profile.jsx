import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions';
import PropTypes from 'prop-types'
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import './stylesheets/profile.css'
import Sidebar from './Sidebar/sidebar';
import RemovePost from './DelPost/RemovePost';
function Profile(props) {


    return (
        <React.Fragment>
            <Sidebar></Sidebar>
            <div id="cardprofile">
                <div id="cardprofile-header">
                    <img src="https://avatars.githubusercontent.com/u/112900222?v=4" alt="Profile Image" class="profile-img" />
                </div>
                <div id="cardprofile-body">
                    <p id="cardprofilename">Your Name</p>
                    <a href="#" id="cardprofilemail">yourname@amail.com</a>
                    <p class="job">Developer | Designer</p>
                </div>

                <div class="social-links">
                    <a href="https://www.linkedin.com/in/nabeel-ahmad-2843a724b/" className='social-icon'><FaIcons.FaLinkedin></FaIcons.FaLinkedin></a>
                    <a href="https://github.com/nabeel2022skipq" className="social-icon"><FaIcons.FaGithub></FaIcons.FaGithub></a>
                    <a href="https://leetcode.com/nabeelskipq2022/" className="social-icon"><SiIcons.SiLeetcode></SiIcons.SiLeetcode></a>
                </div>

                <div id="cardprofile-footer">
                    <p class="count"><span>120k</span> Followers | <span>10k</span> Following</p>
                </div>
            </div>
            {props.posts.filter(post => post.title.includes('Nabeel Ahmad')).map(post => (
                <Card border="light" style={{ width: '70rem', marginLeft: "290px", marginTop: "1rem", boxShadow: "0 15px 25px rgba(0,0,0,.6)" }} className="bg-dark text-white text-left">
                    <Card.Header>{post.title}</Card.Header>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            {post.description}
                        </Card.Text>
                        {/* <a href="#" class="btn btn-outline-info">Delete Post</a> */}
                        <RemovePost postdel={{ "title": post.title, "description": post.description }}></RemovePost>
                    </Card.Body>
                </Card>
            ))}
        </React.Fragment>
    );
}
Profile.protoTypes = {
    posts: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired

}
const mapDispatchToProps = {
    getPosts
}
function mapStateToProps(state) {
    return {
        posts: state.post.posts
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);