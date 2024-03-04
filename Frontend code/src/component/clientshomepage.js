import React from 'react';
import mycss from '../css/main.css';

import menubtn from "../images/menu.png";
import Services from './services';

export default function ClientHome() {



    let book=()=>{
        window.location="/book"
    }
    return (
        <>
            <link rel="stylesheet" href={mycss} />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

            <meta name="viewport" content="width = device-width,initial-scale =1" />
            <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins:wght@200&display=swap"
                rel="stylesheet" />
            <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll/dist/smooth-scroll.polyfills.min.js"></script>
            {/* HOME PAGE / MAIN PAGE */}
            <section id="NavTop1">
                <div class="conatiner-fluid">
                    <div class="row banner-text">
                        <h1>Welcome User</h1>
                        <p>What's in your mind ? Hope you like our services ! </p>
                        <button type="link" onClick={ book} class="btn btn-outline-light" style={{ width: '9vw', height: '5vh', marginLeft: '45%' }}>Book an Event</button>                  
                        </div>
                </div>
            </section>

        </>
    );
}