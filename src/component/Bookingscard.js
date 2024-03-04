import React from 'react'

const Bookingscard = ({ c }) => {
  return (
    <tr>
      <td className="fs-4 myfont">booking_{c.bookingId}</td>
      <td className="fs-4 myfont">{c.name}</td>
      <td className="fs-4 myfont">{c.event}</td>

      <td className="fs-4 myfont">{c.date}</td>
      <td className="fs-4 myfont">{c.guest}</td>
      <td className="fs-4 myfont">{c.city}</td>
    </tr>
  )
}

export default Bookingscard
