import React from 'react'
import mycss from './main.css'
import { Link } from 'react-router-dom'

function Adminnav() {
  const logoutAdmin = () => {
    sessionStorage.removeItem('admin')
    window.location = '/'
  }
  // function Adminnav() {
  // const name = sessionStorage.getItem('username')
  // const endSession = () => {
  //   sessionStorage.removeItem('userSession')
  //   sessionStorage.removeItem('userdata')
  //   sessionStorage.removeItem('username')
  //   localStorage.removeItem('user')
  // }
  return (
    <div className="position: fixed">
      <link rel="stylesheet" href={mycss} />
      <nav className=" fixed-top mynav text-danger bg-info">
        <div class="row nav d-flex">
          <div class="col-lg-3 col-md-2 ms-4 me-5 navhead">
            <Link to="/admin" className="col a1 text-warning">
              Admin
            </Link>
          </div>
          <div class="col-lg-2 col-md-1 col-lg-1 ms-5">
            <Link to="/viewpendingbookings" className="col a1 text-info">
              Pending Bookings
            </Link>
          </div>
          <div class="col-lg-2 col-md-1 col-lg-1 ms-2">
            <Link to="/adminview" className="nav-link text-info">
              View Bookings
            </Link>
          </div>

          <div class="col-lg-2 col-md-1 col-lg-1 me-3 ms-2">
            <Link to="/adminusers" className="nav-link text-info">
              View Users
            </Link>
          </div>

          {/* <div class="col-sm-1 col-md-1 col-lg-1 me-4 ms-5">
            <h5 style={{ color: 'lightgreen', fontWeight: 'bold' }}>
              Welcome
              <br />
              <span>{name}</span>
            </h5>
          </div> */}
          <div class="col-lg-1 col-md-1 col-lg-1 ms-2">
            <form action="/">
              <button
                type="submit"
                onClick={logoutAdmin}
                className="btn btn-danger ps-3 pe-3 p-2"
              >
                <span className="fs-6 form-label">Logout</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Adminnav
