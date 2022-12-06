import React, { useState } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import * as GiIcons from 'react-icons/gi'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import * as CgIcons from 'react-icons/cg'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Logout from '../Auth/Logout';
function ResNav(props) {
    const [show, setShow] = useState("hidden")
    const [rotate, setRotate] = useState("rotate-0")
    const [showsubdropdown, setShowSubDropDown] = useState("hidden")
    const [subrotate, setSubRotate] = useState("rotate-0")
    const [isHidden, setisHidden] = useState("hidden")

    // if (isHidden === "block") {
    //     document.getElementById("largepage").classList.add("blur-sm")
    // }

    function handeDropDown() {
        if (show === "hidden") {
            setShow("block")
            setRotate("rotate-180")
        }
        else {
            setShow("hidden")
            setShowSubDropDown("hidden")
            setRotate("rotate-0")
            setSubRotate("rotate-0")
        }
    }

    const handeSubDropDown = () => {
        if (showsubdropdown === "hidden") {
            setShowSubDropDown("block")
            setSubRotate("rotate-180")
        }
        else {
            setShowSubDropDown("hidden")
            setSubRotate("rotate-0")
        }
    }

    function handleShow() {
        if (isHidden === "hidden") {
            setisHidden("block")
        }
        else if (isHidden === "block") {
            setisHidden("hidden")
            // document.getElementById("largepage").classList.remove("blur-sm")
        }
    }
    function handleBack() {
        window.history.go(-1)
    }
    return (
        <div>
            <div>
                <nav className="flex items-center justify-between bg-transparent px-6 pr-10 text-white select-none w-full relative">
                    <div>
                        {/* <h1 className="cursor-pointer text-2xl font-semibold uppercase">nabeel ahmad</h1> */}
                        {/* <Link to='/home' onClick={history.back}><BiArrowBack /></Link> */}
                        <BiArrowBack onClick={handleBack}></BiArrowBack>
                    </div>
                    <div className='py-4 px-5 md:hidden'>
                        <GiIcons.GiHamburgerMenu className='text-3xl transform hover:scale-125 transition ease-in-out duration-300 cursor-pointer' onClick={handleShow}></GiIcons.GiHamburgerMenu>
                    </div>
                    <div className={`my-6 absolute top-10 right-5 ${isHidden} md:hidden`}>
                        <ul className='bg-black bg-opacity-70 rounded-lg w-96 overflow-hidden'>
                            <li className='p-5 to-slate-600 text-xs sm:text-lg md:text-xl font-bold border-b-1 hover:bg-white hover:bg-opacity-20 hover:border-l-8 border-white cursor-pointer'><AiIcons.AiFillHome className='inline-block mx-1 md:mx-3 hover:text-blue-700'></AiIcons.AiFillHome>Home</li>
                            <li className='p-5 to-slate-600 text-xs sm:text-lg md:text-xl font-bold hover:bg-white hover:bg-opacity-20 hover:border-l-8 border-white cursor-pointer'><MdIcons.MdMarkEmailRead className='inline-block mx-1 md:mx-3 hover:text-blue-700'></MdIcons.MdMarkEmailRead>Contact</li>
                            <li className='p-5 to-slate-600 text-xs sm:text-lg md:text-xl font-bold hover:bg-white hover:bg-opacity-20 hover:border-l-8 border-white cursor-pointer'><CgIcons.CgProfile className='inline-block mx-1 md:mx-3 hover:text-blue-700'></CgIcons.CgProfile>Profile</li>
                            <li className='p-5 to-slate-600 text-xs sm:text-lg md:text-xl font-bold hover:bg-white hover:bg-opacity-20 hover:border-l-8 border-white cursor-pointer'><MdIcons.MdMessage className='inline-block mx-1 md:mx-3 hover:text-blue-700'></MdIcons.MdMessage>Messges</li>
                            <li className='p-5 to-slate-600 text-xs sm:text-lg md:text-xl font-bold hover:bg-white hover:bg-opacity-20 hover:border-l-8 border-white cursor-pointer'><AiIcons.AiFillHome className='inline-block mx-1 md:mx-3 hover:text-blue-700'></AiIcons.AiFillHome>Home</li>
                            <li className='p-5 to-slate-600 text-xs sm:text-lg md:text-xl font-bold hover:bg-white hover:bg-opacity-20 hover:border-l-8 border-white cursor-pointer'><MdIcons.MdMarkEmailRead className='inline-block mx-1 md:mx-3 hover:text-blue-700'></MdIcons.MdMarkEmailRead>Contact</li>
                            <li className='p-5 to-slate-600 text-xs sm:text-lg md:text-xl font-bold hover:bg-white hover:bg-opacity-20 hover:border-l-8 border-white cursor-pointer'><CgIcons.CgProfile className='inline-block mx-1 md:mx-3 hover:text-blue-700'></CgIcons.CgProfile>Profile</li>
                            <li className='p-5 to-slate-600 text-xs sm:text-lg md:text-xl font-bold hover:bg-white hover:bg-opacity-20 hover:border-l-8 border-white cursor-pointer'><MdIcons.MdMessage className='inline-block mx-1 md:mx-3 hover:text-blue-700'></MdIcons.MdMessage>Messges</li>
                        </ul>
                    </div>
                    <div className='hidden md:block'>
                        <ul className="flex cursor-pointer">
                            <Link to='/my-list'><li className="p-5 hover:text-white">Home</li></Link>
                            <div className="relative">
                                <li className="py-5 px-3 hover:text-white" onClick={handeDropDown}>Dropdown<svg className={`inline-block w-4 h-4 ${rotate}`} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></li>
                                <div className={`absolute right-0 mt-1 w-48 bg-black bg-opacity-70 overflow-hidden rounded-md shadow-md ${show}`}>
                                    <ul className="text-sm text-white">
                                        <AnchorLink href='#features'><li className="px-4 py-2 hover:bg-white hover:bg-opacity-20">Features</li></AnchorLink>
                                        <li className="px-4 py-2  hover:bg-white hover:bg-opacity-20 flex justify-between items-center" onClick={handeSubDropDown}>Read More<svg aria-hidden="true" className={`inline-block text-right w-4 h-4 ${subrotate}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></li>
                                        <AnchorLink href='#faqs'><li className="px-4 py-2  hover:bg-white hover:bg-opacity-20">FAQ's</li></AnchorLink>
                                        <li className="border-t border-t-white px-4 py-2  hover:bg-white hover:bg-opacity-20">Sign out</li>
                                    </ul>
                                </div>
                                <div className={`absolute left-28 mx-1 mt-10 w-48 overflow-hidden rounded-md bg-black bg-opacity-70  shadow-md ${showsubdropdown}`}>
                                    <ul className="text-sm text-white">
                                        <AnchorLink href='#contactus'><li className="px-4 py-2 hover:bg-white hover:bg-opacity-20">Contact Us</li></AnchorLink>
                                        <AnchorLink href='#moreservices'><li className="px-4 py-2 hover:bg-white hover:bg-opacity-20">More Services</li></AnchorLink>
                                        <AnchorLink href='#pricing'><li className="px-4 py-2 hover:bg-white hover:bg-opacity-20">Pricing</li></AnchorLink>
                                        <AnchorLink href='#team'><li className="px-4 py-2 hover:bg-white hover:bg-opacity-20">Team</li></AnchorLink>
                                    </ul>
                                </div>
                            </div>

                            <AnchorLink href='#aboutus'><li className="p-5 hover:text-white">About</li></AnchorLink>
                            <AnchorLink href='#services'><li className="p-5 hover:text-white">Services</li></AnchorLink>
                            {props.isAuthenticated ? <AnchorLink href='#user'><li className="p-5 hover:text-white">{props.user.name}</li></AnchorLink> : null}
                            <Logout></Logout>

                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

ResNav.propTypes = {
    user: PropTypes.object,
    isAuthenticated: PropTypes.bool
}

function mapStateToProps(state) {
    return {
        user: state.auth.user,
        isAuthenticated: state.auth.isAuthenticated,
    }
}

export default connect(mapStateToProps)(ResNav)