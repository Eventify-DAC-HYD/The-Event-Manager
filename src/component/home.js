import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import mycss from './main.css'
import logo from './images/logo.jpeg'
import crimg1 from './images/1.jpg'
import crimg2 from './images/2.jpg'
import crimg3 from './images/3.jpg'
import crimg4 from './images/4.jpg'
import crimg5 from './images/5.jpg'
import crimg6 from './images/6.jpg'
import crimg7 from './images/7.jpg'

import svimg6 from './images/servicesimg7.jpg'
import plannerimg from './images/plannerimg3.jpg'
import { Link } from 'react-router-dom'

export default function Home() {
  const name = sessionStorage.getItem('username')
  const endSession = () => {
    sessionStorage.removeItem('userSession')
    sessionStorage.removeItem('userdata')
    sessionStorage.removeItem('username')
    localStorage.removeItem('user')
  }
  return (
    <>
      <link rel="stylesheet" href={mycss} />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <meta name="viewport" content="width = device-width,initial-scale =1" />
      <link
        href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins:wght@200&display=swap"
        rel="stylesheet"
      />
      <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll/dist/smooth-scroll.polyfills.min.js"></script>
      {/* HOME PAGE / MAIN PAGE */}

      <section>
        <div style={{ marginTop: '80px' }}>
          <Carousel fade>
            <Carousel.Item interval={2500}>
              <img className="d-block w-100" src={crimg1} alt="First slide" />
              <Carousel.Caption>
                <h3></h3>
                <p>
                   
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img className="d-block w-100" src={crimg2} alt="Second slide" />
              <Carousel.Caption>
                <h3> </h3>
                <p> </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img className="d-block w-100" src={crimg3} alt="Third slide" />
              <Carousel.Caption>
                <h3> </h3>
                <p>
                   
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img className="d-block w-100" src={crimg4} alt="First slide" />
              <Carousel.Caption>
                <h3> </h3>
                <p>
                   
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img className="d-block w-100" src={crimg5} alt="First slide" />
              <Carousel.Caption>
                <h3> </h3>
                <p>
                   
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img className="d-block w-100" src={crimg6} alt="First slide" />
              <Carousel.Caption>
                <h3> </h3>
                <p>
                  
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img className="d-block w-100" src={crimg7} alt="First slide" />
              <Carousel.Caption>
                <h3> </h3>
                <p>
                   
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  )
}
