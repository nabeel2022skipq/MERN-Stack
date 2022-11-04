import React from 'react';
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import * as CgIcons from 'react-icons/cg'
function Navbar() {
    return (
        <div>
            <div className='hidden sm:block'>
                <div className='flex items-center p-5'>
                    <img src='https://play-lh.googleusercontent.com/gCyyBvrSQ1jiiZxgBu4Mm2wgH7F5rBRXE2H-Uji9wnRHcnDwxx6kMp3kEy8TWlKvsg' alt='main-logo' className='w-6 h-6 mr-1 md:w-12 md:h-12 md:mr-3'></img>
                    <div>
                        <span className='text-xs font-bold sm:text-sm md:text-sm lg:text-lg text-slate-700 uppercase'>Coding Lab</span>
                        <span className='hidden  md:text-xs md:block text-xs text-slate-700'>Web Deveoper</span>
                    </div>
                </div>


            </div>
            <div className='my-6'>
                <ul>
                    <li className='bg p-5 to-slate-600 text-xs sm:text-lg md:text-xl font-bold hover:bg-slate-100 hover:border-r-8 border-blue-700 cursor-pointer'><AiIcons.AiFillHome className='inline-block mx-1 md:mx-3 hover:text-blue-700'></AiIcons.AiFillHome>Home</li>
                    <li className='bg p-5 to-slate-600 text-xs sm:text-lg md:text-xl font-bold hover:bg-slate-100 hover:border-r-8 border-blue-700 cursor-pointer'><MdIcons.MdMarkEmailRead className='inline-block mx-1 md:mx-3 hover:text-blue-700'></MdIcons.MdMarkEmailRead>Contact</li>
                    <li className='bg p-5 to-slate-600 text-xs sm:text-lg md:text-xl font-bold hover:bg-slate-100 hover:border-r-8 border-blue-700 cursor-pointer'><CgIcons.CgProfile className='inline-block mx-1 md:mx-3 hover:text-blue-700'></CgIcons.CgProfile>Profile</li>
                    <li className='bg p-5 to-slate-600 text-xs sm:text-lg md:text-xl font-bold hover:bg-slate-100 hover:border-r-8 border-blue-700 cursor-pointer'><MdIcons.MdMessage className='inline-block mx-1 md:mx-3 hover:text-blue-700'></MdIcons.MdMessage>Messges</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar
