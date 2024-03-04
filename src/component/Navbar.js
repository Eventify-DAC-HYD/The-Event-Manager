import React from 'react'
import '../css/home.css'
import { Link } from 'react-router-dom'

function Navbar() {
  const name = sessionStorage.getItem('username')
  const endSession = () => {
    sessionStorage.removeItem('userSession')
    sessionStorage.removeItem('userdata')
    sessionStorage.removeItem('username')
    localStorage.removeItem('user')
  }
  return (
    <div>
      <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top p-2">
        <div class="container">
          <Link
            class="navbar-brand text-warning fs-3 font-weight-bold ps-5"
            to="/home"
          >
            Event
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsenavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse text-center" id="collapsenavbar">
            <ul class="navbar-nav ml-auto ">
              <li class="nav-item  ms-4 mt-2 fs-5">
                <Link to="/home" className="nav-link text-white ">
                  HOME
                </Link>
              </li>

              <li class="nav-item  ms-4 mt-2 fs-5">
                <Link to="/book" className="nav-link text-white ">
                  BOOK
                </Link>
              </li>

              <li class="nav-item ms-4 mt-2 fs-5">
                <Link to="/view" class="nav-link text-white">
                  PENDING bookings
                </Link>
              </li>

              <li class="nav-item  ms-4 mt-2 fs-5">
                <Link to="/bookings" class="nav-link text-white">
                  VIEW bookings
                </Link>
              </li>

              <li class="nav-item  ms-4 mt-2 fs-5">
                <Link to="/profile" class="nav-link text-white">
                  PROFILE
                </Link>
              </li>

              <li class="nav-item  nav-logout mt-3 ">
                <form onSubmit={endSession} action="/">
                  <button type="submit" class="btn btn-sm btn-primary">
                    <span className="fs-6 ">LOGOUT</span>
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
        <div className="ps-3 pe-5 text-center">
          <h5 className="text-white ">
            Welcome
            <br />
            <span>{name}</span>
          </h5>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
