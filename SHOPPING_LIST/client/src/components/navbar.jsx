import React from 'react';
import '../components/stylesheetscss/navbar.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authActions';
import { Navigate } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import Logout from './auth/Logout';

class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    // logoutexistinguser() {
    //     this.props.logoutUser();
    //     if (!this.props.isAuthenticated) {
    //         <Navigate to="/sign-in"></Navigate>
    //     }
    // }


    render() {
        let navLink1;
        let navLink2;
        if (this.props.user && this.props.isAuthenticated) {
            navLink1 = <NavLink href='#'>Welcome {this.props.user.name} &nbsp; &nbsp; &nbsp;</NavLink>
            navLink2 = <Logout></Logout>
        }
        return (
            <div>
                <Navbar color="secondary" dark expand="sm">
                    <NavbarBrand href="/"><img id className='m-2' src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' alt='shop-list' width="50" height="50"></img>Shopping List</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://www.linkedin.com/in/nabeel-ahmad-2843a724b/">Linkedin</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/nabeel2022skipq">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className='ms-auto' navbar>
                            <NavItem>
                                {navLink1}
                            </NavItem>
                            <NavItem>
                                {navLink2}
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div >
        );
    }
}

Example.propTypes = {
    user: PropTypes.object,
    logoutUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapDispatchToProps = {
    logoutUser
}
function mapStateToProps(state) {
    return {
        user: state.auth.user,
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Example)