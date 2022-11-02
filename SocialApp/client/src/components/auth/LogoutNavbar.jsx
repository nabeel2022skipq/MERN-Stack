import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions'
import PropTypes, { func } from 'prop-types'
import { NavLink } from 'reactstrap';
function Logout(props) {
    function logoutexistingUser() {
        props.logoutUser();
    }
    return (
        <React.Fragment>
            {props.isAuthenticated ? <NavLink onClick={logoutexistingUser} href='/sign-in'>LOGOUT &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
            </NavLink> : <NavLink href='/sign-in'>LOGIN &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
            </NavLink>}
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