import React from 'react';
import mycss from '../css/main.css';
import { Link } from "react-router-dom";

export default function ContactUs() {
    return (
        <>
            <link rel="stylesheet" href={mycss} />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

            <section id="footer">
                <img src="images/footer-img.png" className="footer-img" />
                <div className="title-text">
                    <p>CONTACT</p>
                    <h1>Visit Us Today</h1>
                </div>
                <div className="footer-row">
                    <div className="footer-left">
                        <h1>Contact Us</h1>
                        <p>Plot No. 6 & 7, Hardware Park,Hyderabad - 501510<i className="fa fa-map-marker" style={{ fontSize: '15px' }} /></p>
                        <p>wonderevents@gmail.com<i className="fa fa-paper-plane" style={{ fontSize: '15px' }} /></p>
                        <p>9172049156<i className="fa fa-phone" style={{ fontSize: '15px' }} /></p>
                    </div>
                    <div className="footer-right">
                        <h1>Get in Touch</h1>
                        <form onSubmit={{}}>
                            <div className='mb-3'>
                                <label>Name : </label>
                                <input type="name" placeholder="Enter full name" required style={{ width: '17vw', height: '5vh' }} />
                            </div>
                            <div className='mb-3'>
                                <label>Email : </label>
                                <input type="email" placeholder="abcd@gmail.com" required style={{ width: '17vw', height: '5vh' }} />
                            </div>
                            <div className='mb-3'>
                                <label>Number : </label>
                                <input type="number" placeholder="10 digit mob number" required style={{ width: '17vw', height: '5vh' }} />
                            </div>
                            <div className='mb-3'>
                                <label>Subject : </label>
                                <input type="text" placeholder="wedding, birthday, party,etc." required style={{ width: '17vw', height: '5vh' }} />
                            </div>
                            <div className='mb-3'>
                                <label>Message : </label>
                                <input type="message" placeholder="type here !!!" style={{ width: '17vw', height: '15vh' }} />
                            </div>
                            <div className='mb-3'>
                                <button type="submit" class="btn btn-dark">Submit</button>
                            </div>
                        </form>
                    </div>
                </div >
                <div className="social-links">
                    <i className="fa fa-twitter" style={{ fontSize: '15px' }} />
                    <i className="fa fa-instagram" style={{ fontSize: '15px' }} />
                    <i className="fa fa-facebook" style={{ fontSize: '15px' }} />
                    <i className="fa fa-youtube" style={{ fontSize: '15px' }} />
                    <p>Copyright 2024 - CDAC Hyderabad</p>
                    {/* <p>Web technology project guided by vipul sir</p>*/}
                </div>
            </section >
        </>
    );
}