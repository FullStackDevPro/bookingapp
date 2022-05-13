import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";
import eaysImage from "../assets/pexels-shane-aldendorff-1493112.jpg"
import Header from "./Header"
import PlaceTovisit from "./PlaceToVisit"
import Booking from "../components/Booking";
import About from "./Form"
import MyPage from "../userPage/MyPage"
import ContactUs from "../userPage/ContactForm";



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
    <div>
        {/* <CssBaseline/> */}
        {/* <Header/> */}
        {/* <About/> */}
        {/* <PlaceTovisit/> */}
        {/* <Login/>
        <Booking/> */}
        {/* <Booking/> */}
        <MyPage user = {"Malek"}/>
        {/* <ContactUs/> */}
        
    </div>

)    
}