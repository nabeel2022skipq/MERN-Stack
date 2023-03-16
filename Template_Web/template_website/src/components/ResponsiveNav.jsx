import React, { useState } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import * as GiIcons from 'react-icons/gi'
function ResNav() {
    const [show, setShow] = useState("hidden")
    const [rotate, setRotate] = useState("rotate-0")
    const [showsubdropdown, setShowSubDropDown] = useState("hidden")
    const [subrotate, setSubRotate] = useState("rotate-0")

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
    return (
        <div>
            <div>
                <nav className="flex items-center justify-between bg-transparent px-6 pr-10 text-gray-400 select-none">
                    <div>
                        <h1 className="cursor-pointer text-4xl font-bold font-serif ">𝚂𝚒𝚝𝚎 𝙽𝚊𝚖𝚎</h1>
                    </div>
                    <div className='py-4 px-5 md:hidden'>
                        <GiIcons.GiHamburgerMenu className='text-3xl transform hover:scale-125 transition ease-in-out duration-300 cursor-pointer'></GiIcons.GiHamburgerMenu>
                    </div>
                    <div className='hidden md:block'>
                        <ul className="flex cursor-pointer">
                            <li className="p-5">Home</li>
                            <div className="relative">
                                <li className="py-5 px-3 hover:text-white" onClick={handeDropDown}>Dropdown<svg className={`inline-block w-4 h-4 ${rotate}`} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></li>
                                <div className={`absolute right-0 mt-1 w-48 overflow-hidden rounded-md bg-gray-700 shadow-md ${show}`}>
                                    <ul className="text-sm text-gray-400">
                                        <AnchorLink href='#features'><li className="px-4 py-2 hover:bg-gray-600 hover:text-white">Features</li></AnchorLink>
                                        <li className="px-4 py-2 hover:bg-gray-600 hover:text-white flex justify-between items-center" onClick={handeSubDropDown}>Read More<svg aria-hidden="true" className={`inline-block text-right w-4 h-4 ${subrotate}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></li>
                                        <AnchorLink href='#faqs'><li className="px-4 py-2 hover:bg-gray-600 hover:text-white">FAQ's</li></AnchorLink>
                                        <li className="border-t border-t-gray-600 px-4 py-2 hover:bg-gray-600 hover:text-white">Sign out</li>
                                    </ul>
                                </div>
                                <div className={`absolute left-28 mx-1 mt-10 w-48 overflow-hidden rounded-md bg-gray-700 shadow-md ${showsubdropdown}`}>
                                    <ul className="text-sm text-gray-400">
                                        <AnchorLink href='#contactus'><li className="px-4 py-2 hover:bg-gray-600 hover:text-white">Contact Us</li></AnchorLink>
                                        <AnchorLink href='#moreservices'><li className="px-4 py-2 hover:bg-gray-600 hover:text-white">More Services</li></AnchorLink>
                                        <AnchorLink href='#pricing'><li className="px-4 py-2 hover:bg-gray-600 hover:text-white">Pricing</li></AnchorLink>
                                        <AnchorLink href='#team'><li className="px-4 py-2 hover:bg-gray-600 hover:text-white">Team</li></AnchorLink>
                                    </ul>
                                </div>
                            </div>

                            <AnchorLink href='#aboutus'><li className="p-5 hover:text-white">About</li></AnchorLink>
                            <AnchorLink href='#services'><li className="p-5 hover:text-white">Services</li></AnchorLink>

                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default ResNav;