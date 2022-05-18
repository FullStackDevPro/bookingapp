import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
// import SortIcon from '@mui/icons-material/Sort';
import SortIcon from "@material-ui/icons/Sort"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import {Link as Scroll} from "react-scroll";
import eaysImage from "../assets/pexels-dids-1499477.jpg"
import Places from "./Info.js"
import useWindowPositio from "../hook/useWindowPosition"
import Login from "../components/Login"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '100vh',
        fontFamily: 'Nunito',
        minHeight : "100vh",
        backgroundImage: `url(${eaysImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        
      },
      appbar: {
        background: 'none',
      },
      appbarWrapper: {
        width: '80%',
        margin: '0 auto',
      },
      appbarTitle: {
        flexGrow: '1',
      },
      icon: {
        color: 'green',
        fontSize: '4rem',
        
      },
      colorText: {
        color: 'white',
        fontSize : "30px",
       
        
      },
      container: {
        textAlign: 'center',
        alignItems: 'center',
      },
      title: {
        color: '#fff',
        fontSize: '4.5rem',
      },
      goDown: {
        color: '#5AFF3D',
        fontSize: '5rem',
      },
      container: {
        textAlign: 'center',
      },
      titleScroll: {
        color: '#fff',
        fontSize: '4.5rem',
      },
  }))

export default function appointment({state}){
    const classes = useStyles();
    const [checked,setChecked] = useState(false);
    useEffect(()=> {
        setChecked(true)
    },[])
    return (
      <div>
        <div className={classes.root} id = "signIn/signUp">
        <h1 className={classes.appbarTitle}> Please <span className={classes.colorText}>Log In or Sign Up</span> to be able <span className={classes.colorText}>to book an appointment</span></h1>
                <Toolbar className={classes.appbarWrapper}>
                  <Login/>
                </Toolbar>
        </div> 
        </div>
    )
}