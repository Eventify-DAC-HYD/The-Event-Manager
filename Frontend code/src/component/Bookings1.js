import axios from "axios";
import React, { useState, useEffect } from "react";
import base_url from "../api/bootapi";
import swal from "sweetalert2";
import Bookingscard from "./Bookingscard";

const Bookings = () => {
  const name = sessionStorage.getItem("username");
  const userdata = JSON.parse(sessionStorage.getItem("userdata"));
  //console.log(userdata);
  useEffect(() => {
    document.title = "View Bookings";
    if (sessionStorage.getItem("userSession") == null) {
      window.location = "/";
    } else if (localStorage.getItem("user") == null) {
      window.location = "/";
    }
    viewBookings(userdata);
  }, []);

  const viewBookings = (data) => {
    axios.post(`${base_url}/viewBookings`, data).then(
      (response) => {
        if (response.data.length === 0) {
          swal.fire({
            title: `Hey ${name}`,
            text: "There are no Bookings",
            icon: "error",
            button: "Ok",
          });
        }
        setRequests(response.data);
      },
      (error) => {
        console.log(error);
        swal.fire({
          icon: "error",
          title: "Oh noooooo!",
          text: "Server is down",
        });
      }
    );
  };
  const [requests, setRequests] = useState([]);

  return (
    <div
      className="p-5 "
      style={{
        backgroundImage:
          "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
      }}
    >
      <h1 className="text-center text-white display-3 pt-5 mt-5 fw-bold ">
        Bookings
      </h1>
      <table className="table table-striped table-dark  m-auto mt-5 mb-5">
        <thead>
          <tr className="fs-4">
            <th scope="col">Booking ID</th>
            <th scope="col">Event booked</th>
            <th scope="col">Date</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
           
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map((item) => <Bookingscard request={item} />)
          ) : (
            <h2 className="text-center m-5 p-5">No Bookings done yet</h2>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
