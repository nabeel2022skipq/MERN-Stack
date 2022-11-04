import React, { useState } from 'react';
import Card from './card';
import Footer from './footer';
import Navbar from './navbar';
import * as GiIcons from 'react-icons/gi'
function ECOMMERCE() {
    const [colspan1, setColSpan1] = useState("hidden")
    const [colspan4, setColSpan4] = useState("col-span-4")
    const [show, setShow] = useState("hidden")

    function handleChange() {
        if (colspan1 === "hidden") {
            setColSpan1("col-span-1")
            setColSpan4("col-span-3")
            setShow("block")
        }
        else {
            setColSpan1("hidden")
            setColSpan4("col-span-4")
            setShow("hidden")
        }
    }
    return (
        <div>
            <div className='grid grid-cols-4'>
                <div className={`${colspan1} bg-white ${show}`}>
                    <Navbar></Navbar>
                </div>
                <main className={`${colspan4}`}>
                    <div className='flex justify-between px-3 py-5 bg-white'>
                        <div>
                            <GiIcons.GiHamburgerMenu className='text-3xl transform hover:scale-125 transition ease-in-out duration-300 cursor-pointer' onClick={handleChange}></GiIcons.GiHamburgerMenu>
                        </div>
                        <div >
                            <h1 className='text-center text-xl sm:text-3xl font-extrabold text-gray-600 transform hover:scale-125 transition hover:ease-in-out  duration-500 cursor-pointer'>PAKLAP</h1>
                        </div>
                        <div>
                            <span className='rounded-lg bg-slate-50 border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white p-2 cursor-pointer transition ease-out duration-500'>LOGIN</span>
                            <span className='rounded-lg bg-slate-50 border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white p-2 ml-2 cursor-pointer'>SIGNUP</span>
                        </div>
                    </div>
                    <div className='text-center'>
                        <h1 className='text-lg sm:text-xl text-slate-400 font-bold my-14 select-none'> LAPTOPS </h1>
                    </div>
                    <hr />
                    <div className='grid lg:grid-cols-3 gap-7 m-9'>
                        {/* Card goes here */}
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </div>
                </main>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default ECOMMERCE;