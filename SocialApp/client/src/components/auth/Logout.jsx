import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions'
import PropTypes, { func } from 'prop-types'
function Logout(props) {
    function logoutexistingUser() {
        props.logoutUser();
    }
    return (
        <React.Fragment>
            {props.isAuthenticated ? <a href='/sign-in' className='m-5' onClick={logoutexistingUser}><img src='https://cdn.pixabay.com/photo/2017/05/29/23/02/logging-out-2355227_960_720.png' alt='logout' height="80px" width="80px"></img></a> : <a href='/sign-up' className='m-5' ><img src='https://cdn-icons-png.flaticon.com/512/295/295128.png' alt='logout' height="80px" width="80px"></img></a>}
        </React.Fragment>
    );
}
Logout.propTypes = {
    posts: PropTypes.array.isRequired,
    error: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
}
const mapDispatchToProps = {
    logoutUser

}
function mapStateToProps(state) {
    return {
        posts: state.post.posts,
        error: state.error,
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);