import React from "react";
import { Link } from "react-router-dom";
function Adminnav() {
  const logoutAdmin = () => {
    sessionStorage.removeItem("admin");
    window.location = "/";
  };
  return (
    <div>
      <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top p-1">
        <div class="container">
          <h3 class="navbar-brand text-warning font-weight-bold">
       
            <Link to="/admin" className="nav-link text-white">
            <span className="text-white fs-3 ">Admin Home</span>
                </Link>
          
          </h3>

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
              <li class="nav-item ms-5">
                <Link to="/viewpendingbookings" className="nav-link text-white">
                  View Pending Bookings
                </Link>
              </li>

              <li class="nav-item ms-5">
                <Link to="/adminview" className="nav-link text-white">
                  View booking
                </Link>
              </li>

              <li class="nav-item ms-5">
                <Link to="/adminusers" className="nav-link text-white">
                  View Users
                </Link>
              </li>

              <li class="nav-item  nav-logout">
                <button
                  class="btn btn-sm btn-primary ps-3 pe-3 p-2"
                  onClick={logoutAdmin}
                  type="submit"
                >
                  &nbsp;&nbsp;LOGOUT&nbsp;&nbsp;
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Adminnav;
