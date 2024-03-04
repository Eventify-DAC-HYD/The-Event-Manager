import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer class="bg-dark text-white pt-5 pb-4">
        <div class="container text-center text-md-left">
          <div class="row text-center text-md-left">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-primary">
              Event Planner
              </h5>
              <p>
               Comming soon ... on mobile 
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-primary">
                Products
              </h5>
              <p>
                <a href="#" class="text-white">
               Event Management
                </a>
              </p>
          
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-primary">
                Useful links
              </h5>
              <p>
                <Link to="/home" class="text-white">
                  HOME
                </Link>
              </p>
              <p>
                <Link to="/book" class="text-white">
                  Book
                </Link>
              </p>
              <p>
                <Link to="/view" class="text-white">
                  VIEW Bookings
                </Link>
              </p>
              <p>
                <Link to="/profile" class="text-white">
                  
                </Link>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-primary">
                Contact
              </h5>
              <p>
                <i class="fa fa-home mr-3"></i> Hyderabad
              </p>
              <p>
                <i class="fa fa-envelope mr-3"></i>WonderEvent@gmail.com
              </p>
              <p>
                <i class="fa fa-phone mr-3"></i>+91 8600843351
              </p>
              <p>
                <i class="fa fa-phone mr-3"></i>+91 9172049156
              </p>
            </div>
          </div>

          <hr class="mb-4" />

          <div class="row align-items-center">
            <div class="col-md-7 col-lg-12 m-auto">
              <p>
                Copyright ©2024 All rights reserved by:
                <a href="#">
                  <strong class="text-warning">  Wonder Events CDAC HYDERABAD</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
