import React from 'react';
import mycss from '../css/main.css';
import svimg1 from "../images/servicesimg1.jpg";
import svimg2 from "../images/servicesimg2.jpg";
import svimg3 from "../images/servicesimg3.jpg";
import svimg4 from "../images/servicesimg5.jpg";
import svimg5 from "../images/servicesimg6.jpg";
import svimg6 from "../images/servicesimg7.jpg";
import { Link } from 'react-router-dom';

export default function Services() {
    return (
        <div>
            <link rel="stylesheet" href={mycss} />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            {/* SERVICES */}
            <section id="services">
                <div className="title-text">
                    <p>SERVICES</p>
                    <h1>The One-stop Solution for</h1>
                  
                </div>
                <div className="service-box">
                    <div className="single-service">
                        <img className="serviceIMG" alt="" src={svimg1} />
                        <div className="overlay" />
                        <div className="service-desc">
                            <h3>
                           
                            Wedding
                           
                                </h3>
                            <hr />
                            <p>
                            </p>
                        </div>
                    </div>
                    <div className="single-service">
                        <img className="serviceIMG" alt=""  src={svimg2} />
                        <div className="overlay" />
                        <div className="service-desc">
                            <h3>Birthday</h3>
                            <hr />
                            <p />
                        </div>
                    </div>
                    <div className="single-service">
                        <img className="serviceIMG" alt="" src={svimg3} />
                        <div className="overlay" />
                        <div className="service-desc">
                            <h3>Seminar</h3>
                            <hr />
                            <p />
                        </div>
                    </div>
                    <div className="single-service">
                        <img className="serviceIMG" alt=""  src={svimg4} />
                        <div className="overlay" />
                        <div className="service-desc">
                            <h3>Exhibition</h3>
                            <hr />
                            <p />
                        </div>
                    </div>
                    <div className="single-service">
                        <img className="serviceIMG" alt=""  src={svimg5} />
                        <div className="overlay" />
                        <div className="service-desc">
                            <h3>Award Function</h3>
                            <hr />
                            <p />
                        </div>
                    </div>
                    <div className="single-service">
                        <img className="serviceIMG" alt=""  src={svimg6} />
                        <div className="overlay" />
                        <div className="service-desc">
                            <h3>Sport Events</h3>
                            <hr />
                            <p />
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}