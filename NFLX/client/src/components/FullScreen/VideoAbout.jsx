import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { useState } from 'react';

function MyVerticallyCenteredModal(props) {

    function handleClose() {
        props.onHide()
        document.getElementById("largepage").classList.remove("blur-sm")
    }
    return (
        <Modal className='text-sm lg:text-lg text-gray-400 bg-white border bg-opacity-30  hover:bg-opacity-50  cursor-pointer rounded-lg absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header className='px-10 py-7'>
                <Modal.Title id="contained-modal-title-vcenter" className='text-gray-200 text-lg lg:text-4xl font-bold font-serif'>
                    {props.currvideo.title}
                    <hr className='mt-1 lg:mt-4'></hr>
                    <p className='hidden lg:block text-sm font-light pt-3 font-mono'>Release Date: {props.currvideo.released}</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='px-10 space-y-3'>
                <h5 className='text-gray-200 font-thin lg:font-semibold font-serif'>Genre: {props.currvideo.category}</h5>
                <p className='text-white lg:text-justify'>{props.currvideo.description}</p>
            </Modal.Body>
            <Modal.Footer className='px-10 py-5 lg:py-7'>
                <Button className='shadow-xl rounded-md py-1 md:py-2 px-3 lg:px-5 text-gray-700 border bg-gray-200 hover:transform hover:scale-105 hover:transition hover:ease-in-out hover:duration-700 duration-700' onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function VideoAbout(props) {
    const [modalShow, setModalShow] = React.useState(false);
    if (modalShow) {
        document.getElementById("largepage").classList.add("blur-sm")
        console.log("getElementById")
    }
    function handleModalShow() {
        setModalShow(true)

    }
    return (
        <>
            <button type='button' className=' hidden sm:block shadow-xl rounded-md py-2 md:py-5 px-3 lg:px-8 text-black hover:transform hover:scale-110 hover:transition hover:ease-in-out hover:duration-700 duration-700' style={{ backgroundColor: "white" }} onClick={handleModalShow}>Description</button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                currvideo={props.currvid}

            />
        </>
    );
}

export default VideoAbout;