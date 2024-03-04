import React, { useEffect, useState } from "react";
import Admincard from "./Admincard";
import base_url from "../api/bootapi";
import swal from "sweetalert2";
import axios from "axios";
function Adminreq() {
  useEffect(() => {
    document.title = "View bookings";
    if (sessionStorage.getItem("admin") != "admin") {
      window.location = "/";
    }
    viewAllRequests();
  }, []);

  const viewAllRequests = () => {
    axios.get(`${base_url}/viewallpendingbookings`).then(
      (response) => {
        if (response.data.length == 0) {
          swal.fire({
            title: "Admin",
            text: "There are no requests",
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

  return (
    <div
      className="pt-5"
      style={{
        backgroundImage:
          "linear-gradient(to right top, #ba538d, #ad5b9c, #9c63a9, #896bb2, #7572b7, #637dc0, #4f87c5, #3a90c7, #21a0cc, #1aafcc, #34bdc8, #55cac2)",
      }}
    >
      <div className=" vh-100">
        <h1 className="mt-5 pt-5 text-center text-white fw-bold">
          View Pending Bookings 
        </h1>
        <table
          className="table table-striped table-secondary mt-5 p-5 m-auto"
          style={{ width: "90%" }}
        >
          <thead>
            <tr className="fs-5">
              <th scope="col">Request ID</th>
              <th scope="col">Name</th>
              <th scope="col">Event</th>
              <th scope="col">Date</th>
              <th scope="col">Venue</th>
              
              <th scope="col">Food</th>
              <th scope="col">Equipment</th>
             
              <th scope="col">Book</th>
              <th scope="col">Reject</th>
            </tr>
          </thead>
          <tbody>
            {requests.length > 0 ? (
              requests.map((item) => <Admincard request={item} />)
            ) : (
              <h2 className="text-center m-1 p-5 fs-4">No booking cards</h2>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Adminreq;