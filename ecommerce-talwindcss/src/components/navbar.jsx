import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import * as CgIcons from 'react-icons/cg'
import * as GiIcons from 'react-icons/gi'
function Navbar() {
    const [toggle, setToggle] = useState("hidden")
    function handleToggle() {
        if (toggle === "hidden") {
            setToggle("block");
        }
        else {
            setToggle("hidden");
        }
    }
    // var el = document.getElementById('hamburger')
    // if (el) {
    //     el.addEventListener('click', console.log(1))
    // }
    return (
        <div>
            <div className='py-5 flex justify-around items-center lg:block'>
                <h1 className='text-center hidden sm:block sm:text-lg lg:block lg:text-3xl font-extrabold text-gray-600 transform hover:scale-125 transition hover:ease-in-out hover:animate-pulse duration-500 cursor-pointer'>PAKLAP</h1><div id='hamburger' className='flex justify-end'>
                    <GiIcons.GiHamburgerMenu className='block lg:hidden text-3xl' onClick={handleToggle}></GiIcons.GiHamburgerMenu>
                </div>
                <span className='hidden lg:block mt-2 font-mono text-gray-500 text-xs text-center'>Buy Laptops in Pakistan at best price</span>
            </div>
            <hr></hr>

            <div className={`my-6 ${toggle} lg:block`}>
                <ul>
                    <li className='bg p-5 to-slate-600 text-sm lg:text-xl font-bold hover:bg-slate-100 hover:border-r-8 border-slate-300 cursor-pointer'><AiIcons.AiFillHome className=' hidden md:inline-block mx-3'></AiIcons.AiFillHome>Home</li>
                    <li className='bg p-5 to-slate-600 text-sm lg:text-xl font-bold hover:bg-slate-100 hover:border-r-8 border-slate-300 cursor-pointer'><MdIcons.MdMarkEmailRead className='hidden md:inline-block mx-3'></MdIcons.MdMarkEmailRead>Contact</li>
                    <li className='bg p-5 to-slate-600 text-sm lg:text-xl font-bold hover:bg-slate-100 hover:border-r-8 border-slate-300 cursor-pointer'><CgIcons.CgProfile className='hidden md:inline-block mx-3'></CgIcons.CgProfile>Profile</li>
                    <li className='bg p-5 to-slate-600 text-sm lg:text-xl font-bold hover:bg-slate-100 hover:border-r-8 border-slate-300 cursor-pointer'><MdIcons.MdMessage className='hidden md:inline-block mx-3'></MdIcons.MdMessage>Messges</li>
                </ul>
            </div>
        </div >
    );
}

export default Navbar
