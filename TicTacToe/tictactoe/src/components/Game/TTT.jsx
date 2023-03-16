import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';

function TicTacToe() {

    const [player, setPlayer] = useState(1)


    function handleChange(id) {

        if (player === 1) {
            if (document.getElementById(id).innerHTML == "&nbsp;") {
                document.getElementById(id).style = "color:#545454";
                document.getElementById(id).innerHTML = "X";

                if (document.getElementById("r00").innerHTML === "X" && document.getElementById("r01").innerHTML === "X" && document.getElementById("r02").innerHTML === "X"
                    ||
                    document.getElementById("r10").innerHTML === "X" && document.getElementById("r11").innerHTML === "X" && document.getElementById("r12").innerHTML === "X"
                    ||
                    document.getElementById("r20").innerHTML === "X" && document.getElementById("r21").innerHTML === "X" && document.getElementById("r22").innerHTML === "X"
                    ||
                    document.getElementById("r00").innerHTML === "X" && document.getElementById("r10").innerHTML === "X" && document.getElementById("r20").innerHTML === "X"
                    ||
                    document.getElementById("r01").innerHTML === "X" && document.getElementById("r11").innerHTML === "X" && document.getElementById("r21").innerHTML === "X"
                    ||
                    document.getElementById("r02").innerHTML === "X" && document.getElementById("r12").innerHTML === "X" && document.getElementById("r22").innerHTML === "X"
                    ||
                    document.getElementById("r00").innerHTML === "X" && document.getElementById("r11").innerHTML === "X" && document.getElementById("r22").innerHTML === "X"
                    ||
                    document.getElementById("r02").innerHTML === "X" && document.getElementById("r11").innerHTML === "X" && document.getElementById("r20").innerHTML === "X"
                ) {
                    setTimeout(() => {
                        document.getElementById("game").classList.add("blur-lg")
                        document.getElementById("header").classList.add("blur-lg")
                        document.getElementById("winpage").classList.remove("hidden")
                    }, 500);
                }
                else {
                    setPlayer(2)
                }
            }
            else if (document.getElementById(id).innerHTML !== "&nbsp;") {
                swal("Here's a message!", "Position already filled");
            }



        }

        if (player === 2) {
            if (document.getElementById(id).innerHTML == "&nbsp;") {
                document.getElementById(id).style = "color:#F2EBD3";
                document.getElementById(id).innerHTML = "O";
                if (document.getElementById("r00").innerHTML === "O" && document.getElementById("r01").innerHTML === "O" && document.getElementById("r02").innerHTML === "O"
                    ||
                    document.getElementById("r10").innerHTML === "O" && document.getElementById("r11").innerHTML === "O" && document.getElementById("r12").innerHTML === "O"
                    ||
                    document.getElementById("r20").innerHTML === "O" && document.getElementById("r21").innerHTML === "O" && document.getElementById("r22").innerHTML === "O"
                    ||
                    document.getElementById("r00").innerHTML === "O" && document.getElementById("r10").innerHTML === "O" && document.getElementById("r20").innerHTML === "O"
                    ||
                    document.getElementById("r01").innerHTML === "O" && document.getElementById("r11").innerHTML === "O" && document.getElementById("r21").innerHTML === "O"
                    ||
                    document.getElementById("r02").innerHTML === "O" && document.getElementById("r12").innerHTML === "O" && document.getElementById("r22").innerHTML === "O"
                    ||
                    document.getElementById("r00").innerHTML === "O" && document.getElementById("r11").innerHTML === "O" && document.getElementById("r22").innerHTML === "O"
                    ||
                    document.getElementById("r02").innerHTML === "O" && document.getElementById("r11").innerHTML === "O" && document.getElementById("r20").innerHTML === "O"
                ) {
                    setTimeout(() => {
                        document.getElementById("game").classList.add("blur-lg")
                        document.getElementById("header").classList.add("blur-lg")
                        document.getElementById("winpage").classList.remove("hidden")
                    }, 500);
                }
                else {
                    setPlayer(1)
                }
            }
            else if (document.getElementById(id).innerHTML !== "&nbsp;") {
                swal("Here's a message!", "Position already filled");
            }
        }
    }

    function handleRestart() {
        window.location.reload();
    }

    useEffect(() => {
        if (document.getElementById("r00").innerHTML !== "&nbsp;" && document.getElementById("r01").innerHTML !== "&nbsp;" && document.getElementById("r02").innerHTML !== "&nbsp;" && document.getElementById("r10").innerHTML !== "&nbsp;" && document.getElementById("r11").innerHTML !== "&nbsp;" && document.getElementById("r12").innerHTML !== "&nbsp;" && document.getElementById("r20").innerHTML !== "&nbsp;" && document.getElementById("r21").innerHTML !== "&nbsp;" && document.getElementById("r22").innerHTML !== "&nbsp;") {
            setTimeout(() => {
                document.getElementById("game").classList.add("blur-lg")
                document.getElementById("header").classList.add("blur-lg")
                document.getElementById("draw").classList.remove("hidden")
            }, 500);
        }
    })
    return (
        <div className='relative'>
            <div id='header' className='py-20 text-2xl flex justify-center items-center space-x-10'>
                <p className={player === 1 ? "font-bold transform scale-125 transition ease-in-out duration-500" : null}>Player 1 - <b className='text-3xl font-thin' style={{ color: "#545454" }}>X</b></p>
                <span className='text-white'>│</span>
                <p className={player === 2 ? "font-bold transform scale-125 transition ease-in-out duration-500" : null}>Player 2 - <b className='text-3xl font-thin' style={{ color: "#F2EBD3" }}>O</b></p>
            </div>

            {/* <div className='text-center py-10 text-2xl'>
                <p>{`Player ${player} turn`}</p>
            </div> */}
            <div className='flex items-center justify-center'>
                <div id='game' className='grid grid-cols-3 select-none w-1/3' >

                    {/* First Row */}
                    <div onClick={() => handleChange("r00")}>
                        <div className='border-r-8 border-b-8 border-custom-green flex justify-center items-center'>
                            <p id='r00' className='text-9xl font-thin'>&nbsp;</p>
                        </div>
                    </div>
                    <div onClick={() => handleChange("r01")}>
                        <div className='border-r-8 border-b-8 border-custom-green flex justify-center items-center'>
                            <p id='r01' className='text-9xl font-thin'>&nbsp;</p>
                        </div>
                    </div>
                    <div onClick={() => handleChange("r02")}>
                        <div className='border-b-8 border-custom-green flex justify-center items-center'>
                            <p id='r02' className='text-9xl font-thin'>&nbsp;</p>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div onClick={() => handleChange("r10")}>
                        <div className='border-r-8 border-b-8 border-custom-green flex justify-center items-center'>
                            <p id='r10' className='text-9xl font-thin'>&nbsp;</p>
                        </div>
                    </div>
                    <div onClick={() => handleChange("r11")}>
                        <div className='border-r-8 border-b-8 border-custom-green flex justify-center items-center'>
                            <p id='r11' className='text-9xl font-thin'>&nbsp;</p>
                        </div>
                    </div>
                    <div onClick={() => handleChange("r12")}>
                        <div className='border-b-8 border-custom-green flex justify-center items-center'>
                            <p id='r12' className='text-9xl font-thin'>&nbsp;</p>
                        </div>
                    </div>

                    {/* Third Row */}
                    <div onClick={() => handleChange("r20")}>
                        <div className='border-r-8 border-custom-green flex justify-center items-center'>
                            <p id='r20' className='text-9xl font-thin'>&nbsp;</p>
                        </div>
                    </div>
                    <div onClick={() => handleChange("r21")}>
                        <div className='border-r-8 border-custom-green flex justify-center items-center'>
                            <p id='r21' className='text-9xl font-thin'>&nbsp;</p>
                        </div>
                    </div>
                    <div onClick={() => handleChange("r22")}>
                        <div className='flex justify-center items-center'>
                            <p id='r22' className='text-9xl font-thin'>&nbsp;</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Game Win */}
            <div id='winpage' className='absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 w-full border border-white bg-gradient-to-r from-green-400 to-blue-500 p-20 text-white font-extrabold text-5xl text-center mt-20 hidden'>
                <div className='flex items-center justify-center'>
                    <img src='https://media0.giphy.com/media/Wt0Jj6omiCaOVa5GsT/giphy.gif?cid=6c09b952d6i72sonaj00brxbhuxthbx9gi1hym9unpkzp2si&rid=giphy.gif&ct=s' className='h-56'></img>
                </div>
                <p>Player <b className='text-6xl'>{player}</b> Won!</p>
                <button className='border-2 border-black bg-white text-black text-2xl p-3 rounded-md font-serif mt-16' onClick={handleRestart}>Restart Game</button>
            </div>

            {/* Game Draw */}
            <div id='draw' className='absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 w-full border border-white bg-gradient-to-r from-green-400 to-blue-500 p-20 text-white font-extrabold text-5xl text-center mt-20 hidden'>
                <div className='flex items-center justify-center'>
                    <img src='https://creazilla-store.fra1.digitaloceanspaces.com/emojis/58086/pleading-face-emoji-clipart-md.png' className='h-56'></img>
                </div>
                <p>Draw!</p>
                <button className='border-2 border-black bg-white text-black text-2xl p-3 rounded-md font-serif mt-16' onClick={handleRestart}>Play Again</button>
            </div>
        </div>
    );
}

export default TicTacToe;