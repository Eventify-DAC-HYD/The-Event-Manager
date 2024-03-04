
import logo from "../images/logo.jpeg";
import mycss from '../css/main2.css';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


export default function NavbarHome(){
  const name = sessionStorage.getItem("username");


    return (
        <>
        <link rel="stylesheet" href={mycss} />
 
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll/dist/smooth-scroll.polyfills.min.js"></script>
        <div className="App">
          <div class="conatiner-fluid">
            <div class="row nav d-flex">
              <div class="col-lg-2">
                <img src={logo} class="logo" />
              </div>
              <div class="col-sm-1 col-md-1 col-lg-1">
                <Link to="/home" className="col a1">
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
              <div class="col-sm-1 col-md-1 col-lg-1 mx-5">
                <Link to="/testimonial">
                  TESTIMONIALS
                </Link>
              </div>
              <div class="col-sm-1 col-md-1 col-lg-1 mx-5">
                <Link to="/login">
                  LOGIN
                </Link>
              </div>
              <div class="col-sm-1 col-md-1 col-lg-1">
                <Link to="/register">
                  REGISTER
                </Link>
              </div>
            
              
            </div>
          </div>
          </div>
          
          </>
          );
    }