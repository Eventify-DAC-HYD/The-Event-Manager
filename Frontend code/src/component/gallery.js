import React from 'react';
import mycss from '../css/main.css';


import glvid1 from "./videos/galvid1.mp4";
import glvid2 from "./videos/galvid2.mp4";
import glvid3 from "./videos/galvid3.mp4";
import glvid4 from "./videos/galvid4.mp4";
import glvid5 from "./videos/galvid5.mp4";
import glvid6 from "./videos/galvid6.mp4";
import glvid7 from "./videos/galvid7.mp4";
import { Link } from "react-router-dom";

export default function Gallery() {
    return (
        <div>
            <link rel="stylesheet" href={mycss} />


            {/* Gallery images */}
            <section id="services">
                <div className="title-text">
                    <p>GALLERY</p>
                    <h1>Some of Our Wonderful Events</h1>
                </div>
                <div className="video-container">
                    <div className="color-overlay" />
                    <video controls id="myVideo">
                        <source src={glvid1} type="video/mp4" />
                    </video>
                </div>
                <div className="video-container">
                    <div className="color-overlay" />
                    <video controls id="myVideo">
                        <source src={glvid2} type="video/mp4" />
                    </video>
                </div>
                <div className="video-container">
                    <div className="color-overlay" />
                    <video controls id="myVideo">
                        <source src={glvid3} type="video/mp4" />
                    </video>
                </div>
                <div className="video-container">
                    <div className="color-overlay" />
                    <video controls id="myVideo">
                        <source src={glvid4} type="video/mp4" />
                    </video>
                </div>
                <div className="video-container">
                    <div className="color-overlay" />
                    <video controls id="myVideo">
                        <source src={glvid5} type="video/mp4" />
                    </video>
                </div>
                <div className="video-container">
                    <div className="color-overlay" />
                    <video controls id="myVideo">
                        <source src={glvid6} type="video/mp4" />
                    </video>
                </div>
                <div className="video-container">
                    <div className="color-overlay" />
                    <video controls id="myVideo">
                        <source src={glvid7} type="video/mp4" />
                    </video>
                </div>
                 
            </section>
        </div>
    );
}