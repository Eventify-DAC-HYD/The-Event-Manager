
import React from "react";
import base_url from "../api/bootapi";
import swal from "sweetalert2";
import axios from "axios";
import { useState,useEffect } from "react";
  import { Link } from "react-router-dom";
const Bookingscard = ({ request }) => {

const handleBookimg=()=>{
  sessionStorage.setItem("bookingId", request.bookingId);
  window.location="/update"
};
  const deleteBooking = () => {
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
        title: "Are you sure you want to delete this booking?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteBooking();
          swal
            .fire("Deleted!", "booking has been Deleted", "success")
            .then(function () {
              window.location = "/bookings";
            });
        }
      });
  };
  return (
    <tr>
      <td className="fs-4">booking_{request.bookingId}</td>
      <td className="fs-4">{request.event}</td>
     
      <td className="fs-6">{request.date}</td>
      <td className="fs-4">{request.city}</td>
      <td className="fs-4">{request.guest}</td>
      <td>
        <button
          type="button"
          class="btn btn-outline-danger btn-sm badge-pill"
          onClick={handleDelete}
        >
          Delete
        </button>
      </td>
     
    </tr>
  );
};

export default Bookingscard;
