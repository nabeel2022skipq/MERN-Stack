import React from 'react';
import { RiPlayList2Line } from 'react-icons/ri'
function NothingtoShow() {
    return (
        <React.Fragment>
            <div className='flex flex-col justify-center items-center mt-28 lg:mt-36 space-y-3'>
                <div><RiPlayList2Line size={70} color="white"></RiPlayList2Line></div>
                <div className='text-gray-300 font-bold text-2xl'>Nothing to show here</div>
                <div><p className='text-gray-500'>Add movies to My List to watch later. Your movies will show here</p></div>
            </div>
        </React.Fragment>
    );
}

export default NothingtoShow;