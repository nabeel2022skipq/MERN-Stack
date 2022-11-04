import React from 'react';
import Card from './card';
import Footer from './footer';
import Navbar from './navbar';
function ECOMMERCE() {
    return (
        <div className='grid grid-cols-4'>
            <div className='col-span-1 bg-white'>
                <Navbar></Navbar>
            </div>
            <main className='col-span-3 pt-10'>
                <div className='flex justify-center'>
                    <span className='rounded-lg bg-slate-50 border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white p-3 cursor-pointer transition ease-out duration-500'>LOGIN</span>
                    <span className='rounded-lg bg-slate-50 border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white p-3 ml-2 cursor-pointer'>SIGNUP</span>
                </div>
                <div className='text-center'>
                    <h1 className='text-3xl sm:text-5xl text-slate-400 font-bold my-14 transofrm hover:scale-125 transition ease-in-outout duration-1000 select-none'> ⁃ LAPTOPS ⁃</h1>
                </div>
                <div className='grid lg:grid-cols-3 gap-7 m-9'>
                    {/* Card goes here */}
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
                <Footer></Footer>
            </main>
        </div>
    );
}

export default ECOMMERCE;