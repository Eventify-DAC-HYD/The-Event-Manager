import React from 'react';
import mycss from '../css/main.css';
import plannerimg from "../images/plannerimg3.jpg";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <link rel="stylesheet" href={mycss} />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

            <section id="feature">
                <div className="title-text">
                    <p>ABOUT-US</p>
                    <h1>Why Choose Us</h1>
                </div>
                <div className="feature-box">
                    <div className="features">
                        <h1>Experienced Event Planners and Organizers</h1>
                        <div className="features-desc">
                            <div className="feature-icon">
                                <i className="fa fa-user" style={{ fontSize: '36px' }} />
                            </div>
                            <div className="feature-text">
                                <p>
                                    Weddings, Birthdays, Anniversary, Milennial Celebrations,
                                    Office Events, Surprise Parties and many more
                                </p>
                            </div>
                        </div>
                        <h1>Prebook Your Planner Online</h1>
                        <div className="features-desc">
                            <div className="feature-icon">
                                <i className="fa fa-check-square-o" style={{ fontSize: '30px' }} />
                            </div>
                            <div className="feature-text">
                                <p>
                                    Pre-book your slot with your favourite, our best and depending upon the ratings
                                </p>
                            </div>
                        </div>
                        <h1>Valueable Packages and Offers</h1>
                        <div className="features-desc">
                            <div className="feature-icon">
                                <i className="fa fa-rupee" style={{ fontSize: '50px' }} />
                            </div>
                            <div className="feature-text">
                                <p>
                                    View at the packages offered by Us and Planners, discount coupons if a member
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="features-img">
                        <img style={{ height: '65vh', width: '35vw' }} src={plannerimg} />
                    </div>
                </div>
            </section>
        </div>
    );
}