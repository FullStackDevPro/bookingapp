import React, { useEffect, useState } from "react";
import "../style/App.css"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import eaysImage from "../assets/pexels-shane-aldendorff-1493112.jpg"
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";
import Home from "../HomePage/Home"
import Header from "../HomePage/Header"
import Login_signUp from "../HomePage/Form"
import AboutUs from "../HomePage/AboutUs"
import FooterPart from "../HomePage/Footer"
import ShowServices from "../HomePage/ShowServices";
import MyPage from "../userPage/UserPage"
import {Navigate,navigation} from "react-router-dom"
import ContactUs from "../userPage/ContactForm"
import Booking from "./Booking"

function App(){

    const [checked,setChecked] = useState();
    const [user_email,setuser_email] = useState()
        return (  
        <BrowserRouter >    
        <Routes>
            
            <Route path="/" element ={<div><CssBaseline/> <Header/> <Login_signUp/> <ShowServices/> <AboutUs/> <FooterPart/> </div>}></Route>
            <Route path="/userPage" element ={<MyPage  />}></Route> 
        </Routes>
        </BrowserRouter>
        // <div>
        //     <Booking/>
        // </div>
        
    )
}
export default App;