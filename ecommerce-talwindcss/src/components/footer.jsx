import React from 'react';
function Footer() {
    return (
        <footer className='border-slate-200 shadow-md overflow-hidden'>
            <div className='bg-slate-200 px-2 py-3 flex row items-center'>
                <img src='https://www.clipartmax.com/png/full/379-3794436_react-icon-react-icon.png' className='w-12 h-12 animate-spin'></img>
                <h2 className='text-lg sm:text-xl text-slate-500 px-3'>React with Tailwind CSS</h2>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 bg-slate-200'>
                <div className='px-10 py-3'>
                    <h3 className='text-2xl font-bold mb-4'>Contact Us</h3>
                    <ul className='text-slate-600 text-sm'>
                        <li>The</li>
                        <li>Quick</li>
                        <li>Brown</li>
                        <li>Fox</li>
                        <li>Jumsp</li>
                        <li>Over</li>
                    </ul>
                </div>
                <div className='px-10 py-3'>
                    <h3 className='text-2xl font-bold mb-4'>FAQ's</h3>
                    <ul className='text-slate-600 text-sm'>
                        <li>The</li>
                        <li>Quick</li>
                        <li>Brown</li>
                        <li>Fox</li>
                        <li>Jumsp</li>
                        <li>Over</li>
                    </ul>
                </div>
                <div className='px-10 py-2'>
                    <h3 className='text-2xl font-bold mb-4'>Pricing</h3>
                    <ul className='text-slate-600 text-sm'>
                        <li>The</li>
                        <li>Quick</li>
                        <li>Brown</li>
                        <li>Fox</li>
                        <li>Jumsp</li>
                        <li>Over</li>
                    </ul>
                </div>
                <div className='px-10 py-3'>
                    <h3 className='text-2xl font-bold mb-4'>About Us</h3>
                    <ul className='text-slate-600 text-sm'>
                        <li>The</li>
                        <li>Quick</li>
                        <li>Brown</li>
                        <li>Fox</li>
                        <li>Jumsp</li>
                        <li>Over</li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-center bg-slate-300 py-1 uppercase font-bold font-mono'>
                <h1>Copyright @2022</h1>
            </div>
        </footer>
    );
}

export default Footer;