import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'reactstrap';
import { logoutUser } from '../../actions/authActions'
function Logout(props) {
    function logoutexistingUser() {
        props.logoutUser();
    }
    return (
        <React.Fragment>
            <NavLink onClick={logoutexistingUser} href='/sign-in'>LOGOUT &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
            </NavLink>
        </React.Fragment>
    );
}

const mapDispatchToProps = {
    logoutUser
}

export default connect(null, mapDispatchToProps)(Logout);