import React from 'react';
import mycss from '../css/main.css';
import Komal from "../images/komal.jpeg";
import Kiran from "../images/kiran.jpeg";
import Vishal from "../images/vishal.jpeg";
import Dnyaneshwar from "../images/dnyaneshwar.jpg";
import Keshav from "../images/keshav.jpeg";
import Kartik from "../images/kartik.jpeg";
import Kapil from "../images/kapil.jpeg";

import { Link } from "react-router-dom";

export default function Testimonial() {
    return (
        <>
            <link rel="stylesheet" href={mycss} />
            {/* Testimonial */}
            < section id="testimonial" >
                <div className="title-text">
                    <p>TESTMONIAL</p>
                    <h1>Our Clients</h1>
                </div>
                <div className="testimonial-rows">
                    <div className="testimonial-col">
                        <div className="user">
                            <img src={Komal} />
                            <div className="user-info">
                                <h4>Komal Kawthe <i className="fa fa-twitter" style={{ fontSize: '15px' }} /> </h4>
                                <small>@Komalkawthe</small>
                            </div>
                        </div>
                        <div>
                            <p>Perfection is by far one of the best retreats around, professional in every aspect but friendly
                                too.
                                Michelle and her dedicated team will do their best to meet your needs and give you your ultimate
                                treatment. Massages are a must and worth every penny. Highly worth a visit !</p>
                        </div>
                    </div>
                    <div className="testimonial-col">
                        <div className="user">
                            <img src={Keshav} />
                            <div className="user-info">
                                <h4>Keshav Sangi <i className="fa fa-twitter" style={{ fontSize: '15px' }} /></h4>
                                <small>@Keshavsangi</small>
                            </div>
                        </div>
                        <div>
                            <p>Keshav has worked incredibly hard (and continues to!) to build up this amazing salon. Nestled
                                away
                                in the countryside it's the perfect place to escape for an truly relaxing experience regardless
                                of
                                what treatment you are having. You're always guaranteed a 5star service.
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-col">
                        <div className="user">
                            <img src={Kiran} />
                            <div className="user-info">
                                <h4>Kiran Kambale <i className="fa fa-twitter" style={{ fontSize: '15px' }} /></h4>
                                <small>@Kirankambale</small>
                            </div>
                        </div>
                        <div>
                            <p>Fantastic, relaxing salon, made special by Michelle and her friendly, professional team and the
                                beautiful setting. I highly recommend it!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-rows">
                    <div className="testimonial-col">
                        <div className="user">
                            <img src={Vishal} />
                            <div className="user-info">
                                <h4>Vishal Kadam <i className="fa fa-twitter" style={{ fontSize: '15px' }} /> </h4>
                                <small>@Vishalkadam</small>
                            </div>
                        </div>
                        <div>
                            <p>Perfection is by far one of the best retreats around, professional in every aspect but friendly
                                too.
                                Michelle and her dedicated team will do their best to meet your needs and give you your ultimate
                                treatment. Massages are a must and worth every penny. Highly worth a visit !</p>
                        </div>
                    </div>
                    <div className="testimonial-col">
                        <div className="user">
                            <img src={Dnyaneshwar} />
                            <div className="user-info">
                                <h4>Dnyaneshwar Kangude <i className="fa fa-twitter" style={{ fontSize: '15px' }} /> </h4>
                                <small>@Dnyaneshwarkangude</small>
                            </div>
                        </div>
                        <div>
                            <p>Perfection is by far one of the best retreats around, professional in every aspect but friendly
                                too.
                                Michelle and her dedicated team will do their best to meet your needs and give you your ultimate
                                treatment. Massages are a must and worth every penny. Highly worth a visit !</p>
                        </div>
                    </div>
                    <div className="testimonial-col">
                        <div className="user">
                        <img src={Kapil} />
                            <div className="user-info">
                                <h4>Kapil Hadoltikar<i className="fa fa-twitter" style={{ fontSize: '15px' }} /> </h4>
                                <small>@Kapilhadoltikar</small>
                            </div>
                        </div>
                        <div>
                            <p>Perfection is by far one of the best retreats around, professional in every aspect but friendly
                                too.
                                Michelle and her dedicated team will do their best to meet your needs and give you your ultimate
                                treatment. Massages are a must and worth every penny. Highly worth a visit !</p>
                        </div>
                    </div>
                    <div className="testimonial-col">
                        <div className="user">
                        <img src={Kartik} />
                            <div className="user-info">
                                <h4>Kartik Shelke<i className="fa fa-twitter" style={{ fontSize: '15px' }} /> </h4>
                                <small>@Kartikshelke</small>
                            </div>
                        </div>
                        <div>
                            <p>WonderEvents is by far one of the best retreats around, professional in every aspect but friendly
                                too.
                                Michelle and her dedicated team will do their best to meet your needs and give you your ultimate
                                treatment. Massages are a must and worth every penny. Highly worth a visit !</p>
                        </div>
    </div>


                </div>

            </section >
        </>
    );
}