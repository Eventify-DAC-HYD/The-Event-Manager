import React from 'react'
import mycss from './main.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert2'
import base_url from '../api/bootapi'

const Viewcard = ({ request }) => {
  const setID = () => {
    sessionStorage.setItem('bookingId', request.bookingId)
  }
  const deleteReq = () => {
    swal
      .fire({
        title: 'Are you sure you want to delete this request?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: 'true',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteRequest()
          swal
            .fire('Deleted!', 'Your file has been deleted.', 'success')
            .then(function () {
              window.location = '/view'
            })
        }
      })
  }

  const deleteRequest = () => {
    axios.delete(`${base_url}/bookings/${request.bookingId}`).then(
      (response) => {
        //console.log(response);
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

  return (
    <div>
      <link rel="stylesheet" href={mycss} />
      <div className="card text-center w-75 m-auto mt-5 bg-dark myfont">
        <div className="card-header text-left">
          <h3 className="form-label myfont">
            Request Id:&nbsp;bookingNo{request.bookingId}
          </h3>
        </div>
        <div className="card-body container text-center">
          <div className="row">
            <div className="col-lg-12 text-left p-2">
              <div className="row mb-3">
                <div className="col-lg-4 text-right">
                  <h4 className="form-label">Name: </h4>
                </div>
                <div className="col-lg-8">
                  <h4 className="form-label">{request.name}</h4>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-4 text-right">
                  <h4 className="form-label">Email: </h4>
                </div>
                <div className="col-lg-8">
                  <h4 className="form-label">{request.email}</h4>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-4 text-right">
                  <h5 className="form-label">Address: </h5>
                </div>
                <div className="col-lg-8">
                  <h5 className="form-label">{request.city}</h5>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-4 text-right">
                  <h5 className="form-label">Event booked: </h5>
                </div>
                <div className="col-lg-8">
                  <h5 className="form-label">{request.event}</h5>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-4 text-right">
                  <h5 className="form-label">No of guest </h5>
                </div>
                <div className="col-lg-8">
                  <h5 className="form-label">{request.guest}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 text-right">
              <Link
                className="btn btn-lg btn-primary form-label"
                to="/update"
                onClick={setID}
              >
                Update
              </Link>
            </div>
            <div className="col-lg-6 text-left">
              <form>
                <button
                  type="button"
                  className="btn btn-lg btn-danger form-label"
                  onClick={deleteReq}
                >
                  Delete
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="card-footer text-muted">
          <h4 className="text-center">
            booking is pending, we will contact you soon.
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Viewcard
