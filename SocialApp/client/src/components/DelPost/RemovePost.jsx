import React from 'react';
import { connect } from 'react-redux'
import { removePost } from '../../actions/postActions'
import PropTypes, { func } from 'prop-types'
import * as RiIcons from 'react-icons/ri'

function RemoveData(props) {

    let newpost = props.postdel
    // let titl = newpost.title
    // let desc = newpost.description
    let postdeleting = { "id": newpost }
    function delPost() {
        console.log(postdeleting)
        props.removePost(postdeleting)
    }
    return (
        <button class="btn btn-outline-info" onClick={delPost}><RiIcons.RiChatDeleteFill></RiIcons.RiChatDeleteFill>&nbsp;Delete Post</button>
    );
}
RemoveData.propTypes = {
    removePost: PropTypes.func.isRequired,
    postdel: PropTypes.object.isRequired
}
const mapDispatchToProps = {
    removePost
}

export default connect(null, mapDispatchToProps)(RemoveData);