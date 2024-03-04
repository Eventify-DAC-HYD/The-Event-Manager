import axios from "axios";
import React, { useState, useEffect } from "react";
import Viewcard from "./Viewcard";
import base_url from "../api/bootapi";
import swal from "sweetalert2";

let View = () => {
  const name = sessionStorage.getItem("username");
  const userdata = JSON.parse(sessionStorage.getItem("userdata"));
  useEffect(() => {
    document.title = "View Pending booking";
    if (sessionStorage.getItem("userSession") == null) {
      window.location = "/login";
    } else if (localStorage.getItem("user") == null) {
      window.location = "/login";
    }
    viewUserRequests(userdata);
  }, []);

  const viewUserRequests = (data) => {
    axios.post(`${base_url}/pendingbookings`, data).then(
      (response) => {
        if (response.data.length == 0) {
          swal.fire({
            title: `Hey ${name}`,
            text: "There are no Booking do booking and connect with us...",
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
          title: "Oh no!",
          text: "Server is down",
        });
      }
    );
  };
  const [requests, setRequests] = useState([]);
  console.log(requests);

  return (
    <div
      className="p-5 mt-5 "
      style={{
        backgroundImage:
          "linear-gradient(to right top, #ba538d, #ad5b9c, #9c63a9, #896bb2, #7572b7, #637dc0, #4f87c5, #3a90c7, #21a0cc, #1aafcc, #34bdc8, #55cac2)",
      }}
    >
      <h1 className="text-center display-3 pt-5 fw-bold ">
        Pending Bookings 
      </h1>
      {requests.length > 0 ? (
        requests.map((item) => <Viewcard request={item} />)
      ) : (
        <h2 className="text-center m-5 p-5">No pending Bookings</h2>
      )}
    </div>
  );
};

export default View;
