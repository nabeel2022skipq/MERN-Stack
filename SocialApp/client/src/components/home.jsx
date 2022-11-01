import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/stylesheets/home.css'
import Sidebar from "../components/Sidebar/sidebar";
import WritePost from './MakePost/WritePost';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions';
import PropTypes, { func } from 'prop-types'
import RemovePost from './DelPost/RemovePost';
function Home(props) {

    useEffect(() => {
        props.getPosts();
    }, [])
    return (
        <React.Fragment>
            <Sidebar></Sidebar>
            <WritePost></WritePost>
            {props.posts.map(post => (
                <Card border="light" style={{ width: '70rem', marginLeft: "290px", marginTop: "1rem", boxShadow: "0 15px 25px rgba(0,0,0,.6)" }} className="bg-dark text-white text-left">
                    <Card.Header>{post.title}</Card.Header>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            {post.description}
                        </Card.Text>
                        {/* <a href="#" class="btn btn-outline-info">Delete Post</a> */}
                        {props.token ? <RemovePost postdel={{ "title": post.title, "description": post.description }}></RemovePost> : null}
                    </Card.Body>
                </Card>
            ))}

        </React.Fragment >

    );
}

Home.protoTypes = {
    posts: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    token: PropTypes.string.isRequired

}
const mapDispatchToProps = {
    getPosts
}
function mapStateToProps(state) {
    return {
        posts: state.post.posts,
        isAuthenticated: state.auth.isAuthenticated,
        token: state.auth.token
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);