import React, { useEffect } from 'react';
import '../stylesheets/writedata.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import PropTypes, { func } from 'prop-types'
import FileBase64 from 'react-file-base64';
import { useState } from 'react';
import { insertPost } from '../../actions/postActions';
import { UncontrolledAlert } from 'reactstrap';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/sidebar';
import Navbar from '../navbar';
import Footer from '../Footer';
function WritePost(props) {
    const [item, setItem] = useState({ title: '', image: '' });
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")


    useEffect(() => {
        console.log(item.image)
    })
    function writePosts() {
        let newPost = {
            "title": title,
            "description": desc,
            "email": props.user.email,
            "name": props.user.name
        }
        props.insertPost(newPost);
    }
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <div class="card-container">
                <div class="login-box">
                    <h2>Create New Post</h2>
                    <form>
                        <div class="user-box">
                            <input type="text" name="title" placeholder='Enter title of the post' onChange={e => setTitle(e.target.value)} />
                            <label> Title</label>
                        </div>
                        <br></br>
                        <div class="user-box" >
                            <input type="text" name="description" placeholder='Write something to make a post' onChange={e => setDesc(e.target.value)} />
                            <label>Write Something...</label>
                        </div>
                        {!props.isAuthenticated ? <UncontrolledAlert color='info'>Login or Signup to perform CRUD operation</UncontrolledAlert> :
                            <a href="#" onClick={writePosts}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Create Post
                            </a>
                        }
                    </form>
                </div>
            </div>

        </React.Fragment>


    );
}

WritePost.propTypes = {
    post: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
    user: PropTypes.bool,
    token: PropTypes.string.isRequired
}
const mapDispatchToProps = {
    insertPost
}

function mapStateToProps(state) {
    return {
        post: state.post,
        error: state.error,
        user: state.auth.user,
        isAuthenticated: state.auth.isAuthenticated,
        token: state.auth.token
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WritePost);