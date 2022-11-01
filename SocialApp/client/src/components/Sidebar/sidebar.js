import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/sidebar.css'
import { SidebarData } from './sidebardata';
import { SubMenu } from './submenu';
import { IconContext } from 'react-icons/lib';
import { Button } from 'bootstrap';
import CreateData from '../MakePost/CreatePost';
import Logout from '../auth/Logout';
import { connect } from 'react-redux';
import PropTypes, { func } from 'prop-types'


const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = (props) => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon className='mb-5'>
              <img id='imagelogo' className='mt-5' src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' alt='shop-list' width="50" height="50"></img>
            </NavIcon>

            {SidebarData.map((item, index) => {
              return props.isAuthenticated ? <SubMenu item={item} key={index} /> : null
            })}
            <CreateData></CreateData>
            <br></br>
            <Logout></Logout>
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
}
Logout.propTypes = {
  posts: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool
}
function mapStateToProps(state) {
  return {
    posts: state.post.posts,
    error: state.error,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Sidebar);