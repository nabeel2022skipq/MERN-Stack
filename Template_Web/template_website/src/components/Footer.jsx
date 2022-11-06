import React from 'react';
function Footer() {
    return (
        <footer className='border-slate-200 shadow-md overflow-hidden mt-20 bg-slate-900'>
            <div className='px-2 py-3 flex row items-center'>
                <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' alt='footerlogo' className='w-12 h-12 animate-spin'></img>
                <h2 className='text-lg sm:text-xl text-slate-300 px-3'>React with Tailwind CSS</h2>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4'>
                <div className='px-10 py-3'>
                    <h3 className='text-2xl font-bold text-gray-400 mb-4'>Contact Us</h3>
                    <ul className='text-gray-300 text-sm'>
                        <li>The</li>
                        <li>Quick</li>
                        <li>Brown</li>
                        <li>Fox</li>
                        <li>Jumsp</li>
                        <li>Over</li>
                    </ul>
                </div>
                <div className='px-10 py-3'>
                    <h3 className='text-2xl font-bold text-gray-400 mb-4'>FAQ's</h3>
                    <ul className='text-gray-300 text-sm'>
                        <li>The</li>
                        <li>Quick</li>
                        <li>Brown</li>
                        <li>Fox</li>
                        <li>Jumsp</li>
                        <li>Over</li>
                    </ul>
                </div>
                <div className='px-10 py-2'>
                    <h3 className='text-2xl font-bold text-gray-400 mb-4'>Pricing</h3>
                    <ul className='text-gray-300 text-sm'>
                        <li>The</li>
                        <li>Quick</li>
                        <li>Brown</li>
                        <li>Fox</li>
                        <li>Jumsp</li>
                        <li>Over</li>
                    </ul>
                </div>
                <div className='px-10 py-3'>
                    <h3 className='text-2xl font-bold text-gray-400 mb-4'>About Us</h3>
                    <ul className='text-gray-300 text-sm'>
                        <li>The</li>
                        <li>Quick</li>
                        <li>Brown</li>
                        <li>Fox</li>
                        <li>Jumsp</li>
                        <li>Over</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;