import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions'
import PropTypes, { func } from 'prop-types'
import { Link } from 'react-router-dom';
function Logout(props) {
    function logoutexistingUser() {
        props.logoutUser();
    }
    return (
        <React.Fragment>
            {props.isAuthenticated ? <Link to='/sign-in'> <li className="p-5 hover:text-white" onClick={logoutexistingUser}>Logout</li></Link> : null}
        </React.Fragment>
    );
}

Logout.propTypes = {
    isAuthenticated: PropTypes.bool
}
const mapDispatchToProps = {
    logoutUser

}
function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);