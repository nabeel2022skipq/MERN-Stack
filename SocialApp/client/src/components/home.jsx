import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/stylesheets/home.css'
import WritePost from './MakePost/WritePost';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions';
import PropTypes, { func } from 'prop-types'
import RemovePost from './DelPost/RemovePost';
import Badge from 'react-bootstrap/Badge';
import { loadUser } from '../actions/authActions'
import Footer from './Footer';
import * as FcIcons from 'react-icons/fc'
import UpdatePost from './UpdatePost/UpdatePost';
function Home(props) {

    const [count, setCount] = useState(0)
    function printthis() {
        console.log("this")
    }
    useEffect(() => {
        props.getPosts();
        // props.loadUser();
    }, [])
    return (
        <React.Fragment>
            <WritePost></WritePost>
            <br></br>
            <h1 className=' text-center text-black mb-4 display-5' style={{ marginLeft: "250px", webkitTextStroke: "1px rgba(0,255,255,0.7)" }}>Posts</h1>
            <br></br>
            {props.post.posts.map(post => (
                <Card border='light' style={{ marginLeft: "260px", marginRight: "5px", boxShadow: "0 15px 25px rgba(0,0,0,.6)", marginBottom: "1rem" }} className="bg-dark text-white text-left">
                    <Card.Header id="postheader" style={{ color: "rgba(0,255,255,0.7)" }} as="h5">{post.name} {props.isAuthenticated && post.email === props.user.email ? <p><small>Total: Posts: <Badge id="badgecount" bg="info" text='black'>{props.post.posts.filter(post => post.email === props.user.email).length}</Badge>{' '}</small></p> : null}</Card.Header>
                    <Card.Body>
                        <Card.Title id="posttitle" >{post.title}</Card.Title>
                        <Card.Text id="postdesc">
                            {post.description}
                        </Card.Text>
                        {props.isAuthenticated && post.email === props.user.email ? <RemovePost postdel={post._id}></RemovePost> : null}
                        {props.isAuthenticated && post.email === props.user.email ? <UpdatePost postupdate={{ "id": post._id, "title": post.title, "description": post.description }}></UpdatePost> : null}
                    </Card.Body>
                </Card>
            ))
            }
            <br></br>
            <Footer></Footer>
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