import React, { useEffect, useState } from "react";
import "../css/login.css";
import loginimg from "../images/elogimg.jpg";
import { Link } from "react-router-dom";
import base_url from "../api/bootapi";
import axios from "axios";
import swal from "sweetalert2";

function Login() {
  useEffect(() => {
    document.title = "Login";
  }, []);

  const [user, setUser] = useState({});

  //Handler of Login form
  const handlerForm = (e) => {
    checkLogin(user);
    e.preventDefault();
  };

  //Login check method
  const checkLogin = (data) => {
    axios.post(`${base_url}/login`, data).then(
      (response) => {
        if (response.data.length == 0) {
          swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong Credentials Entered or you have not registered yet.",
          });
        } else {
          if (response.data[0].admin == true) {
            window.location = "/admin";
            sessionStorage.setItem("admin", "admin");
          } else {
            sessionStorage.setItem("username", response.data[0].name);
            const userdata = {
              name: response.data[0].name,
              email: response.data[0].email,
              city: response.data[0].city,
              phone: response.data[0].phone,
            };
            sessionStorage.setItem("userdata", JSON.stringify(userdata));
            sessionStorage.setItem("userSession", response.data[0].email);
            localStorage.setItem("user", response.data[0].email);
            window.location = "/home";
          }
        }
      },
      (error) => {
        console.log(error);
        swal.fire({
          icon: "error",
          title: "Oh no!",
          text: "Server is down",
        });
      }
    );
  };

  return (
    <div class="login-img">
      <div className="vh-100 d-flex">
        <div className="container w-50 m-auto log">
          <div className="row">
            <div className="col-lg-5 p-0">
              {/* <img src={loginimg} className="w-100 log-img" /> */}
            </div>
            <div className="col-lg-7">
              <div className="m-auto w-75 pt-5 pb-5 align-self-center ">
                {/* <h1
                  className="text-center fw-bold mb-3"
                  style={{ color: "#ba8b00" }}
                >
                  EVENTSYSTEM
                </h1> */}
                <h1 className="text-center display-4">Login</h1>

                <form onSubmit={handlerForm} className="row g-3 mt-3">
                  <div className="col-md-12">
                    <label for="email" class="form-label fs-5">
                      Email-ID
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                      }}
                      required
                    />
                  </div>
                  <div className="col-md-12 mt-4">
                    <label for="password" className="form-label fs-5">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                      }}
                      required
                    />
                  </div>
                  <div className="col-md-12 mt-5 text-center">
                    <h5 className="fs-5">
                      Not Registered??
                      <Link
                        to="/register"
                        className="text-decoration-none fs-5"
                      >
                        &nbsp; &nbsp;Register here
                      </Link>
                    </h5>
                  </div>
                  <div class="col-md-12 mt-5 text-center">
                    <Link to="/forget" class="text-decoration-none fs-5">
                      Forgot password?
                    </Link>
                  </div>
                  <div class="col-md-12 text-center">
                    <button
                      type="submit"
                      class="btn btn-lg btn-primary ps-5 pe-5 p-2  mb-2"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
