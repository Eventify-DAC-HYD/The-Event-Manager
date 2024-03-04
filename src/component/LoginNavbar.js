import React from 'react'
import mycss from './main.css'
import { Link } from 'react-router-dom'

function LoginNavbar() {
  const name = sessionStorage.getItem('username')
  const endSession = () => {
    sessionStorage.removeItem('userSession')
    sessionStorage.removeItem('userdata')
    sessionStorage.removeItem('username')
    localStorage.removeItem('user')
  }
  return (
    <div className="position: fixed">
      <link rel="stylesheet" href={mycss} />
      <nav className=" fixed-top mynav text-danger bg-info">
        <div class="row nav d-flex">
          <div class="col-lg-2 col-md-2 ms-4 me-5 navhead">
            <Link to="/home" className="col a1 text-warning">
              Events
            </Link>
          </div>
          <div class="col-sm-1 col-md-1 col-lg-1 ms-5">
            <Link to="/home" className="col a1 text-info">
              Home
            </Link>
          </div>
          <div class="col-sm-1 col-md-1 col-lg-1 ms-2">
            <Link to="/book" className="nav-link text-info">
              Book Event
            </Link>
          </div>
          <div class="col-sm-1 col-md-1 col-lg-1 me-4 ms-2">
            <Link to="/view" className="nav-link text-info">
              Pending Bookings
            </Link>
          </div>
          <div class="col-sm-1 col-md-1 col-lg-1 me-3 ms-2">
            <Link to="/bookings" className="nav-link text-info">
              View Bookings
            </Link>
          </div>
          <div class="col-sm-1 col-md-1 col-lg-1 p ms-2 me-3">
            <Link to="/profile" className="nav-link text-info">
              
            </Link>
          </div>
          <div class="col-sm-1 col-md-1 col-lg-2 me-2 ms-3">
            <h5 style={{ color: 'lightgreen', fontWeight: 'bold' }}>
              Welcome
              <br />
              <span>{name}</span>
            </h5>
          </div>
          <div class="col-sm-1 col-md-1 col-lg-1 ms-2">
            <form onSubmit={endSession} action="/">
              <button type="submit" className="btn btn-danger ps-3 pe-3 p-2">
                <span className="fs-6 form-label">Logout</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default LoginNavbar
