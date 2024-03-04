import React from "react";

function Admincolcard({ request }) {
  return (
    <tr>
      <td className="fs-4 pe-5">Booking_{request.bookingId}</td>
      <td className="fs-4 pe-5">{request.name}</td>
      <td className="fs-4 pe-5">{request.email}</td>
      <td className="fs-4 pe-5">{request.event}</td>
      <td className="fs-4 pe-5">{request.city}</td>
      <td className="fs-4 pe-5">{request.date}</td>
   
    </tr>
  );
}

export default Admincolcard;
