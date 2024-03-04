import React from 'react';
import mycss from '../css/main.css';
import logo from "../images/logo.jpeg";


import { Link } from "react-router-dom";

export default function Home() {
    const name = sessionStorage.getItem("username");
    const endSession = () => {
      sessionStorage.removeItem("userSession");
      sessionStorage.removeItem("userdata");
      sessionStorage.removeItem("username");
      localStorage.removeItem("user");
    };
    return (
        <>
            <link rel="stylesheet" href={mycss} />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

            <meta name="viewport" content="width = device-width,initial-scale =1" />
            <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins:wght@200&display=swap"
                rel="stylesheet" />
            <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll/dist/smooth-scroll.polyfills.min.js"></script>
            {/* HOME PAGE / MAIN PAGE */}
            <section id="NavTop">
                <div class="conatiner-fluid">
                    <div class="row nav d-flex">
                        <div class="col-lg-2 col-md-2">
                            <img src={logo} class="logo mt-1" />
                        </div>
                        <div class="col-sm-1 col-md-1 col-lg-1">
                            <Link to="/" className="col a1">
                                HOME
                            </Link>
                        </div>
                        <div class="col-sm-1 col-md-1 col-lg-1">
                            <Link to="/aboutus" className="col a1">
                                ABOUT
                            </Link>
                        </div>
                        <div class="col-sm-1 col-md-1 col-lg-1">
                            <Link to="/services" className="col a1">
                                SERVICES
                            </Link>
                        </div>
                        <div class="col-sm-1 col-md-1 col-lg-1">
                            <Link to="/gallery" className="col a1">
                                GALLERY
                            </Link>
                        </div>
                        <div class="col-sm-1 col-md-1 col-lg-1">
                            <Link to="/contact">
                                CONTACT
                            </Link>
                        </div>
                        <div class="col-sm-1 col-md-1 col-lg-1 mx-3">
                            <Link to="/testimonial">
                                TESTIMONIALS
                            </Link>
                        </div>
                        <div class="col-sm-1 col-md-1 col-lg-1 mx-5">
                            <a href="login" >LOGIN</a>
                        </div>
                        <div class="col-sm-1 col-md-1 col-lg-1">
                            <a href="register">REGISTER</a>
                        </div>

                                    {/* <div className="ps-2 pe-2 text-right">
                                                <h5 className="text-white ">
                                                    Welcome
                                                    <br />
                                                    <span>{name}</span>
                                                </h5>
                                                </div> */}

                    </div>


                    <div class="row banner-text">
                        <h1>Wonder Events</h1>
                        <p>You imagine it we make it happen</p>
                    </div>
                </div>
            </section>

        </>
    );
}
