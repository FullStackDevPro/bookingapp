import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";
import eaysImage from "../assets/pexels-shane-aldendorff-1493112.jpg"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Header from "./Header"
import ShowAboutPage from "./ShowServices"
import Booking from "../components/Booking";
import Login_signUp from "./Form"
import MyPage from "../userPage/UserPage"
import ContactUs from "../userPage/ContactForm";
import Login from "../components/Login"
import BoxesPart from "./BoxesServices";
import showServices from "./ShowServices"
import AboutUs from "./AboutUs"
import FooterPart from "./Footer"
import ShowServices from "./ShowServices";

const useStyles = makeStyles((theme) => ({
    root :{
        // minHeight : "100vh",
        height: '100vh',
        backgroundImage: `url(${eaysImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
}));

export default function Home({isOpen}){
    const classes = useStyles();
    const [checked,setChecked] = useState(isOpen);
    return ( 
        //< className={classes.root}>
    <div >
        {/* {checked ?  <div> <CssBaseline/> <Header /> </div>  : <div> <MyPage user = {"Malek"}/> </div> } */}

        {/* <BrowserRouter>
        <Routes>
        {checked == false ?                
        
            <Route path="/" element = {<div><CssBaseline/> <MyPage user = {"Malek"}/> </div>}>userPage</Route>
          :         
            <Route path="/" element = {<div><CssBaseline/> <Header/> </div>}>Home</Route>
         }
         </Routes>

        </BrowserRouter> */}

{/* 
            {checked == false ?                
            
            <div><CssBaseline/> <MyPage user = {"Malek"}/> </div>
                :         
            <div><CssBaseline/> <Header/> </div>
            } */}

        <CssBaseline/> 
        <Header />
        <Login_signUp/>
        <ShowServices/>
        <AboutUs/>
        <FooterPart/>
        {/* <MyPage user = {"Malek"}/> */}
        {/* <Booking/> */}
    </div>
    )    
}