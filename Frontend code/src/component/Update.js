import React, { useEffect, useState } from "react";
import base_url from "../api/bootapi";
import axios from "axios";
import swal from "sweetalert2";

import "../css/insert.css";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const Update = () => {
  useEffect(() => {
    //alert();
    document.title = "Update";
    if (sessionStorage.getItem("userSession") == null) {
      window.location = "/";
    } else if (localStorage.getItem("user") == null) {
      window.location = "/";
    }
    getData();
  }, []);

  let ubookingId = sessionStorage.getItem("bookingId");
  //console.log(ubookingId);
  const getData = () => {
    //alert(ubookingId);
    axios.get(`${base_url}/getbookings/${ubookingId}`).then(
      (response) => {
        // alert(response.data[0].event);
        setUevent(response.data[0].event);
        setUcity(response.data[0].city);
        setUdate(response.data[0].date);
        setUguest(response.data[0].guest);
 
      },
      (error) => {
        swal.fire("Server is down");
      }
    );
  };

  let uname = sessionStorage.getItem("username");
  let uemail = sessionStorage.getItem("userSession");
  let [ucity, setUcity] = useState("");
  let [udate, setUdate] = useState("");
  let [uevent, setUevent] = useState("");
  let [uguest, setUguest] = useState("");
  

  let cityinp = (e) => setUcity(e.target.value);
  let eventinp = (e) => setUevent(e.target.value);
  let dateinp = (e) => setUdate(e.target.value);
  let guestinp = (e) => setUguest(e.target.value);

  

  const udata = {
   bookigId: ubookingId,
    name: uname,
   email: uemail,
    city: ucity,
    guest:uguest,
    event: uevent,
    date: udate,
   
  };

  const UpdateBooking = (data) => {
    axios.put(`${base_url}/requests/${ubookingId}`, data).then(
      (response) => {
        swal
          .fire({
            icon: "Success",
            title: "update",
            text: "Your Booking has been updated.",
          })
          .then(function () {
            window.location = "/view";
          });
        clearFields();
        clearError();
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

  let [ecity, setEcity] = useState("");
  let [eevent, setEvent] = useState("");
  let [edate, setEdate] = useState("");
  let [eguest, setEguest] = useState("");

  const clearFields = () => {
    setUcity("");
    setUevent("");
    setUdate("");
   
    setEguest("");
    
  };

  const clearError = () => {
    document.getElementById("city").classList.remove("is-invalid");
    setEcity("");

    document.getElementById("event").classList.remove("is-invalid");
    setEvent("");

    document.getElementById("guest").classList.remove("is-invalid");
    setEguest("");
    document.getElementById("date").classList.remove("is-invalid");
    setEguest("");

  };

  const validate = () => {
    if (
      ucity === "" ||
      uevent === "" ||
      uguest === "" ||
      udate===""
   
    ) {
      swal.fire("All fields are required");
    } else {
      UpdateBooking(udata);
      clearError();
      clearFields();
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right top, #019904, #00971d, #00942a, #009235, #008f3e)",
      }}
      className="mt-5 min-vh-100 pb-5"
    >
      <div id="now" className="mt-5 p-2">
        <h5 className="text-center text-white display-4 fw-bold mt-5 mb-5 pt-5">
          Update An Event
        </h5>

        <form className="row g-3 w-50 m-auto bg-light p-5 fs-5">
        <div className="col-md-12 ">
          <label for="name" className="form-label fs-4">
            Booking Id :-
          </label>
          <span className="fs-3 fw-light text-grey">bookigId_</span>
          <input
            style={{ border: "0px none" }}
            type="text"
            className=" bg-light fs-3 fw-bold text-black"
            id="reqid"
            name="reqid"
            value={ubookingId}
            disabled
          />
        </div>
          <div className="col-md-12 mb-3">
            <label for="name" className="form-label fs-4">
              Name :-
            </label>
            <input
              style={{ border: "0px none" }}
              type="text"
              className=" bg-light fs-3 fw-bold "
              id="name"
              name="name"
              value={uname}
              disabled
            />
          </div>

          <div className="col-md-12 mb-3">
            <label for="email" className="form-label fs-4">
              Email :-
            </label>
            <input
              type="email"
              style={{ border: "0px none" }}
              className="bg-light fs-3 fw-bold "
              id="email"
              name="email"
              value={uemail}
              disabled
            />
          </div>

          <div className="col-md-12 mb-3">
            <label for="event" className="form-label">
              Event Type
            </label>
            <div className="col-md-6 "></div>
            <select
              id="event"
              className="form-select"
              name="event"
              value={uevent}
              onFocus={clearError}
              onChange={eventinp}
            >
              <option selected>Choose Event</option>
              <option value="Social">Social</option>
              <option value="Corporate">Corporate</option>
              <option value="Wedding">Wedding</option>
              <option value="Birthday">Birthday</option>
            </select>
            <div class="invalid-feedback fs-6 fw-bold">{eevent}</div>
          </div>

          <div className="col-md-12 mb-3">
            <label for="city" className="form-label">
              Event Venue
            </label>
            <div className="col-md-6 "></div>
            <select
              id="city"
              className="form-select"
              name="city"
              value={ucity}
              onFocus={clearError}
              onChange={cityinp}
            >
             <option selected>Choose City</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Chennai">Chennai</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Banglore">Banglore</option>
            </select>
            <div class="invalid-feedback fs-6 fw-bold">{ecity}</div>
          </div>

          <div className="col-md-12 mb-3">
            <label for="city" className="form-label">
              Date
            </label>
            <input
              id="date"
              name="date"
            type="date"
              value={udate}
              onFocus={clearError}
              onChange={dateinp}
            />
            <div class="invalid-feedback fs-6 fw-bold">{edate}</div>
          </div>

          <div className="col-12 mb-3">
            <label for="address" className="form-label">
              Number of Guests
            </label>
            <input
              type="number"
              className="form-control"
              id="guest"
              name="guest"
              value={uguest}
              onFocus={clearError}
              onChange={guestinp}
            />
            <div class="invalid-feedback fs-6 fw-bold">{eguest}</div>
          </div>

            <div className="col-md-6 text-center mt-5 mb-5  ">
          <Link to="/view" className="btn btn-primary btn-lg ps-4 pe-4 p-1">
            Back
          </Link>
        </div>
          

          <div className="col-md-6 text-center mt-5 mb-5  ">
            <input
              type="button"
              value="Update"
              className="btn btn-primary btn-lg ps-2 pe-3 p-1"
              onClick={validate}
            />

          </div>
        
        </form>
      </div>
    </div>
  );
};



export default Update;