import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert2";
import base_url from "../api/bootapi";

function Admincard({ request }) {
  const [confirm, setConfirm] = useState({
    bookingId: request.bookingId,
    name: request.name,
    email: request.email,
    event: request.event,
    city: request.city,
    food: request.food,
    equipment: request.equipment,
    status: true,
    date : request.date,
    guest : request.guest,
  });

  const collectedBookings = (data) => {
    axios.put(`${base_url}/requests`, data).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleForm = () => {
    swal
      .fire({
        title: "Hey Admin",
        text: "Are you sure you want to confirm Booking?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          collectedBookings(confirm);
          
          swal.fire("Hurreh, We have taken the Bookings").then(function () {
            window.location = "/viewpendingbookings";
          });
        }
      });
  };
  const deleteRequest = () => {
    axios.delete(`${base_url}/bookings/${request.bookingId}`).then(
      (response) => {
        //console.log(response);
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

  const handleDelete = () => {
    swal
      .fire({
        title: "Are you sure you want to delete this request?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteRequest();
          swal
            .fire("Deleted!", "booking has been Deleted", "success")
            .then(function () {
              window.location = "/admin";
            });
        }
      });
  };
  return (
    <tr>
      <td className="fs-4 pe-3">bookingId{request.bookingId}</td>
      <td className="fs-4 pe-3">{request.name}</td>
      <td className="fs-4 pe-3">{request.event}</td>
      <td className="fs-5 pe-3">{request.date}</td>
      <td className="fs-5 pe-3">{request.city}</td>
      <td className="fs-4 pe-3">{request.food}</td>
      <td className="fs-4 pe-3">{request.equipment}</td>
      <td>
        <button className="btn btn-primary btn-md" onClick={handleForm}>
          Accept
        </button>
      </td>
      <td>
        <button className="btn btn-danger btn-md" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Admincard;
