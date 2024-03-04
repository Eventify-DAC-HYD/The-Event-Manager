import axios from 'axios'
import mycss from './main.css'
import React, { useState, useEffect } from 'react'
import base_url from '../api/bootapi'
import swal from 'sweetalert2'
import Bookingscard from './Bookingscard'

const Bookings = () => {
  const name = sessionStorage.getItem('username')
  const userdata = JSON.parse(sessionStorage.getItem('userdata'))
  useEffect(() => {
    document.title = 'View Bookings'
    if (sessionStorage.getItem('userSession') == null) {
      window.location = '/'
    } else if (localStorage.getItem('user') == null) {
      window.location = '/'
    }
    viewBookings(userdata)
  }, [])

  const viewBookings = (data) => {
    axios.post(`${base_url}/viewBookings`, data).then(
      (response) => {
        if (response.data.length == 0) {
          swal.fire({
            title: `Hey ${name}`,
            text: 'There are no bookings',
            icon: 'error',
            button: 'Ok',
          })
        }
        setRequests(response.data)
      },
      (error) => {
        console.log(error)
        swal.fire({
          icon: 'error',
          title: 'Oh no!',
          text: 'Server is down',
        })
      },
    )
  }
  const [requests, setRequests] = useState([])

  return (
    <div
      className="p-5 "
      style={{
        backgroundImage:
          'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
      }}
    >
      <link rel="stylesheet" href={mycss} />
      <h1 className="text-center display-3 pt-5  fw-bold booking myfont">
        Bookings
      </h1>
      <table className="table table-striped table-hover table-info  m-auto mt-5 mb-5">
        <thead>
          <tr className="fs-4 myfontAdm">
            <th className="fs-4 myfontAdm scope=col">Booking ID</th>
            <th className="fs-4 myfontAdm scope=col">Name</th>
            <th className="fs-4 myfontAdm scope=col">Type of Event</th>
            <th className="fs-4 myfontAdm scope=col">Event Date</th>
            <th className="fs-4 myfontAdm scope=col">No of Guest</th>
            <th className="fs-4 myfontAdm scope=col">Venue</th>
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map((item) => <Bookingscard c={item} />)
          ) : (
            <h2 className="text-center m-5 p-5">No Bookings done yet</h2>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Bookings
