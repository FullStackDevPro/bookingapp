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

// const useStyles = makeStyles((theme) => ({
//     root :{
//         // minHeight : "100vh",
//         height: '100vh',
//         backgroundImage: `url(${eaysImage})`,
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//     }
// }));

function App(){
    // const classes = useStyles();
    const [checked,setChecked] = useState(false);
    return (  
        <BrowserRouter >
            {/* <Home/> */}
            
        <Routes>
            
            <Route path="/" element ={<div><CssBaseline/> <Header/> <Login_signUp/> <ShowServices/> <AboutUs/> <FooterPart/> </div>}></Route>
            {/* <Route path="/" element ={<Login_signUp/>}></Route>
            <Route path="/" element ={<ShowServices/>}></Route>
            <Route path="/" element ={<AboutUs/>}></Route>
            <Route path="/" element ={<FooterPart/>}></Route> */}
            <Route path="/userPage" element ={<MyPage user = {"mmmm"}/>}></Route> 
        </Routes>
        </BrowserRouter>
        // <div>
        //     <MyPage/>
        // </div>
    )
}
export default App;