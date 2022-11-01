import React from 'react';
import '../stylesheets/writedata.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import PropTypes, { func } from 'prop-types'
import { useState } from 'react';
import { insertPost } from '../../actions/postActions';
function WritePost(props) {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")


    function writePosts() {
        let newPost = {
            "title": title,
            "description": desc
        }
        props.insertPost(newPost);
    }
    return (
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
                <a href="#" onClick={writePosts}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Create Post
                </a>
            </form>
        </div>
    );
}

WritePost.propTypes = {
    posts: PropTypes.array.isRequired
}
const mapDispatchToProps = {
    insertPost
}

function mapStateToProps(state) {
    return {
        posts: state.post.posts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WritePost);