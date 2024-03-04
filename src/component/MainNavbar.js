import React from 'react'
import mycss from './main.css'
import logo from './images/logo.jpeg'

import svimg6 from './images/servicesimg7.jpg'
import plannerimg from './images/plannerimg3.jpg'
import { Link } from 'react-router-dom'

function MainNavbar() {
  const name = sessionStorage.getItem('username')
  const endSession = () => {
    sessionStorage.removeItem('userSession')
    sessionStorage.removeItem('userdata')
    sessionStorage.removeItem('username')
    localStorage.removeItem('user')
  }
  return (
    <div>
      <link rel="stylesheet" href={mycss} />
      <nav className=" fixed-top mynav text-danger bg-info">
        <div class="row nav d-flex">
          <div class="col-lg-2 col-md-2 ms-4 me-5 navhead">
            <Link to="/" className="col a1 text-warning">
              Event MANAGEMENT
            </Link>
          </div>
          <div class="col-sm-1 col-md-1 col-lg-1">
            <Link to="/" className="col a1 text-info">
              Home
            </Link>
          </div>
          <div class="col-sm-1 col-md-1 col-lg-1">
            <Link to="/aboutus" className="col a1 text-info">
              About
            </Link>
          </div>
          <div class="col-sm-1 col-md-1 col-lg-1">
            <Link to="/services" className="col a1 text-info">
              Service
            </Link>
          </div>
          <div class="col-sm-1 col-md-1 col-lg-1">
            <Link to="/gallery" className="col a1 text-info">
              Gallery
            </Link>
          </div>
          <div class="col-sm-1 col-md-1 col-lg-1">
            <Link to="/contact" className="col a1 text-info">
              Contact
            </Link>
          </div>
          <div class="col-sm-1 col-md-1 col-lg-1 mx-3 me-5">
            <Link to="/testimonial" className="col a1 text-info">
              Testimonials
            </Link>
          </div>
          <div class="col-sm-1 col-md-1 col-lg-1 ms-5">
            <button type="button" class="btn btn-success ps-3 pe-3 p-2">
              <a className="fs-6 form-label" href="login">
                Login
              </a>
            </button>
          </div>

          <div class="col-sm-1 col-md-1 col-lg-1">
            <button type="button" class="btn btn-success ps-3 pe-3 p-2">
              <a className="fs-6 form-label" href="register">
                SignUp
              </a>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default MainNavbar
