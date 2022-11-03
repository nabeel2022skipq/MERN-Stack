import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/authActions';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
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
import LogoutNavbar from './auth/LogoutNavbar';

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
            navLink2 = <LogoutNavbar></LogoutNavbar>
        }
        return (
            <div>
                <Navbar dark expand="sm" style={{ marginLeft: "250px", backgroundColor: "#15171c" }}>
                    <NavbarBrand className='text-info ' style={{ fontWeight: "bold" }} href="/home"><img id className='m-2' src='https://cdn.pixabay.com/photo/2016/06/16/04/21/twitter-1460609_960_720.png' alt='shop-list' width="50" height="50"></img>Happn!</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://www.linkedin.com/in/nabeel-ahmad-2843a724b/"><FaIcons.FaLinkedin ></FaIcons.FaLinkedin>&nbsp;Linkedin</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/nabeel2022skipq"><FaIcons.FaGithub></FaIcons.FaGithub>&nbsp; GitHub</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/nabeel2022skipq"><SiIcons.SiLeetcode></SiIcons.SiLeetcode> &nbsp;Leetcode</NavLink>
                            </NavItem>
                            <NavItem >
                                {this.props.isAuthenticated ? <NavLink className='text-info' style={{ fontWeight: "bold" }}>Total Posts: {this.props.posts.filter(post => post.email === this.props.user.email).length}</NavLink> : null}
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
    posts: PropTypes.array.isRequired,
    user: PropTypes.object,
    logoutUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapDispatchToProps = {
    logoutUser
}
function mapStateToProps(state) {
    return {
        posts: state.post.posts,
        user: state.auth.user,
        isAuthenticated: state.auth.isAuthenticated,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Example)