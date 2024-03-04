import React from "react";

import Register from "./component/register.js";
import Login from "./component/login.js";
import Insert from "./component/Insert"
import View from "./component/View.js";
import Footer from "./component/Footer";
 import Navbar from "./component/Navbar";
 import Home from './component/home';
import AboutUs from './component/aboutUs';
import Services from './component/services';
import Gallery from './component/gallery';
import Testimonial from './component/testinmonial';
import ContactUs from './component/contact';
import Bookings from "./component/Bookings"
import Update from "./component/Update.js";
import NavbarHome from "./component/NavbarHome.js";
import ClientHome from "./component/clientshomepage.js";
import MainNavbar from "./component/MainNavbar.js";
import LoginNavbar from "./component/LoginNavbar.js";
import Forget from "./component/Forget";
import AdminsHome from "./component/adminshomepage.js";
import Adminnav from "./component/Adminnav";
import Adminreq from "./component/Adminreq";
import Adminview from "./component/Adminview";
import Adminusers from "./component/Adminusers";

import "./App.css";
import Invoice from "./component/invoice.js";
import { Route, Routes} from "react-router-dom";
import Terms from "./component/termsAndCondition";



export default function App() {
  return (
    <>
 
      
          <Route exact path="/login" component={Login }></Route>
        
          <Route exact path="/payment" component ={  Invoice} ></Route>
          <Route exact path="/register" component={Register }></Route>
          
         
    
          <Route path='/aboutus'><MainNavbar/> <AboutUs/>     </Route> 
          <Route path='/services'><MainNavbar/> <Services/>     </Route> 
          <Route path='/gallery'><MainNavbar/> <Gallery/>     </Route> 
          <Route exact path='/testimonial'><MainNavbar/> <Testimonial/>    </Route>
         
          <Route path='/contact'><MainNavbar/> <ContactUs/> <Footer/>    </Route>
          <Route path='/forget'><Forget/>    </Route>

          <Route exact path="/home">
                          <LoginNavbar/>  
                       <Home/> 
                       <Services/>    
                       <ContactUs/>                   
                        </Route>

                        <Route exact path="/
                        termsandconditions">
                          <Terms/>  
                                         
                        </Route>
                        
          <Route exact path="/book">
                          <LoginNavbar/>  
                       <Insert/>
                                       
                        </Route>

          <Route exact path="/">
                          <MainNavbar/>  
                       <Home/> 
                       <Services/>    
                       <ContactUs/>                   
                        </Route>

          <Route exact path="/admin">
                        <Adminnav />
                        <AdminsHome/>
                       <Footer/>
                        </Route>
                        
          <Route exact path="/viewpendingbookings">
                        <Adminnav />
                        <Adminreq />
                       <Footer/>
                        </Route>

                        <Route exact path="/adminview">
                              <Adminnav />
                              <Adminview />
                            </Route>
                           

                     <Route exact path="/adminusers">
                    <Adminnav />
                    <Adminusers />
                  </Route>
                  
                  <Route exact path="/view">
                      <LoginNavbar />
                      <View />
                    </Route> 

                      
                  <Route exact path="/clienthome">
                      <Navbar />
                      <ClientHome/>
                      <Footer/>
                    </Route> 


                    <Route exact path="/bookings">
                      <LoginNavbar />
                      <Bookings />
                    </Route>

                    <Route exact path="/update">
                      <Navbar />
                      <Update />
                    </Route>
    </>
  );
}

