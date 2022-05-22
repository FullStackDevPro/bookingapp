import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";
import eaysImage from "../assets/pexels-shane-aldendorff-1493112.jpg"
import Header from "./Header"
import ShowAboutPage from "./ShowServices"
import Booking from "../components/Booking";
import Login_signUp from "./Form"
import MyPage from "../userPage/UserPage"
import ContactUs from "../userPage/ContactForm";
import Login from "../components/Login"
import FooterPart from "./Footer"
import BoxesPart from "./BoxesServices";


const useStyles = makeStyles((theme) => ({
    root :{
        // minHeight : "100vh",
        height: '100vh',
        backgroundImage: `url(${eaysImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
}));

export default function Home(){
    const classes = useStyles();
    return ( 
        //< className={classes.root}>
    <div >
        
        <CssBaseline/>
        <Header />
        {/* <MyPage user = {"Malek"}/> */}

    </div>
    )    
}