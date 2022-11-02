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
import Badge from 'react-bootstrap/Badge';
import Example from './navbar'
import { loadUser } from '../actions/authActions'
function Home(props) {
    useEffect(() => {
        props.getPosts();
        // props.loadUser();
    }, [])
    return (
        <React.Fragment>
            <WritePost></WritePost>
            {props.post.posts.map(post => (
                <Card border="light" style={{ width: '70rem', marginLeft: "330px", marginTop: "1rem", boxShadow: "0 15px 25px rgba(0,0,0,.6)" }} className="bg-dark text-white text-left">
                    <Card.Header>{post.name} {props.isAuthenticated && post.email === props.user.email ? <p><small>Total: Posts: <Badge bg="info" text='black'>{props.post.posts.filter(post => post.email === props.user.email).length}</Badge>{' '}</small></p> : null}</Card.Header>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            {post.description}
                        </Card.Text>
                        {props.isAuthenticated && post.email === props.user.email ? <RemovePost postdel={{ "title": post.title, "description": post.description }}></RemovePost> : null}
                    </Card.Body>
                </Card>
            ))}

        </React.Fragment >

    );
}

Home.protoTypes = {
    post: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    token: PropTypes.string.isRequired,
    user: PropTypes.object,
    loadUser: PropTypes.func.isRequired

}
const mapDispatchToProps = {
    getPosts,
    loadUser
}
function mapStateToProps(state) {
    return {
        post: state.post,
        user: state.auth.user,
        isAuthenticated: state.auth.isAuthenticated,
        token: state.auth.token
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);