import React, { useState } from 'react';
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
                <nav class="flex items-center justify-between bg-gray-700 px-6 pr-10 text-gray-400 select-none">
                    <div>
                        <h1 class="cursor-pointer text-2xl font-semibold uppercase">paklap</h1>
                    </div>
                    <div className='py-4 px-3 md:hidden'>
                        <GiIcons.GiHamburgerMenu className='text-3xl transform hover:scale-125 transition ease-in-out duration-300 cursor-pointer'></GiIcons.GiHamburgerMenu>
                    </div>
                    <div className='hidden md:block'>
                        <ul class="flex cursor-pointer">
                            <li class="p-5 hover:text-white">Home</li>
                            <div class="relative">
                                <li class="py-5 px-3 hover:text-white" onClick={handeDropDown}>Dropdown<svg class={`inline-block w-4 h-4 ${rotate}`} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></li>
                                <div class={`absolute right-0 mt-1 w-48 overflow-hidden rounded-md bg-gray-700 shadow-md ${show}`}>
                                    <ul class="text-sm text-gray-400">
                                        <li class="px-4 py-2 hover:bg-gray-600 hover:text-white">Notifications</li>
                                        <li class="px-4 py-2 hover:bg-gray-600 hover:text-white flex justify-between items-center" onClick={handeSubDropDown}>Read More<svg aria-hidden="true" class={`inline-block text-right w-4 h-4 ${subrotate}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></li>
                                        <li class="px-4 py-2 hover:bg-gray-600 hover:text-white">FAQ's</li>
                                        <li class="border-t border-t-gray-600 px-4 py-2 hover:bg-gray-600 hover:text-white">Sign out</li>
                                    </ul>
                                </div>
                                <div class={`absolute left-28 mx-1 mt-10 w-48 overflow-hidden rounded-md bg-gray-700 shadow-md ${showsubdropdown}`}>
                                    <ul class="text-sm text-gray-400">
                                        <li class="px-4 py-2 hover:bg-gray-600 hover:text-white">Overview</li>
                                        <li class="px-4 py-2 hover:bg-gray-600 hover:text-white">Downloads</li>
                                        <li class="px-4 py-2 hover:bg-gray-600 hover:text-white">Billing</li>
                                        <li class="px-4 py-2 hover:bg-gray-600 hover:text-white">Rewards</li>
                                    </ul>
                                </div>
                            </div>
                            <li class="p-5 hover:text-white">Contact</li>
                            <li class="p-5 hover:text-white">About</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default ResNav;