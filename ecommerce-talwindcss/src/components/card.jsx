import React from 'react';
function Card() {
    return (
        <div className='rounded shadow-md border-b border-black hover:shadow-2xl transition ease-out duration-300 relative  bg-white transform hover:scale-105 hover:transition hover:ease-out hover:duration-300 cursor-pointer'>
            <div className='flex justify-center'>
                <img src='https://www.hbc.com.pk/images/products/hp-omen-15-ek1097nr-ci7-11th-gen,-16gb,-512gb-ssd,-rtx-3060--4059-680436-130821105115.png' alt='o15' className='border-b border-gray-400 h-52 object-cover mt-2'></img>
            </div>
            <div className='p-6'>
                <span className='block font-bold text-xl'>HP OMEN 15</span>
                <span className='text-gray-500 text-sm'>HP Omen 15 Ci7 10th Gen 16GB, 512GB, RTX 3060</span>
            </div>
            <div className='absolute top-0 bg-slate-400 text-white rounded-br-md rounded-tl-md transform hover:scale-125 transition ease-out duration-300'>
                <span className='p-3'>Price: 225,000</span>
            </div>
        </div>
    );
}

export default Card;