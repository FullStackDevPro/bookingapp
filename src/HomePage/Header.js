import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
// import SortIcon from '@mui/icons-material/Sort';
import SortIcon from "@material-ui/icons/Sort"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import {Link as Scroll} from "react-scroll";
import eaysImage from "../assets/pexels-shane-aldendorff-1493112.jpg"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',

        // height: '100vh',
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
        color:"black",
        fontSize: '4rem',
        fontFamily: 'Nunito',
        fontWeight: 'bold',
      },
      icon: {
        color: 'green',
        fontSize: '4rem',
        
      },
      colorText: {
        // color: '#5AFF3D',
        color: 'black',
        fontSize: '4rem',
        fontFamily: 'Nunito',
        fontWeight: 'bold',
      },
      container: {
        textAlign: 'center',
      },
      title: {
        color: '#fff',
        fontSize: '4.5rem',
        fontWeight: 'bold',
      },
      goDown: {
        color: '#5AFF3D',
        fontSize: '5rem',
      },
  }));

export default function Header(){
    const classes = useStyles();
    const [checked,setChecked] = useState(false);
    useEffect(()=> {
        setChecked(true)
    },[])
    return (
        <Collapse 
        in={checked}
        {...(checked ? {timeout:2000} : {})}
        // collapsedSize={0}
        >
        <div className={classes.root} id = "header">
            <AppBar className={classes.appbar} elevation = {10}>
                <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle}> My <span className={classes.colorText}>Eyes</span></h1>
                <h2 className={classes.appbarTitle}>Welcome to Eyes <span className={classes.colorText}>Examination Centre</span> </h2>
                <IconButton>
                    <LockOutlinedIcon className={classes.icon} />
                </IconButton>
                </Toolbar>
            </AppBar>

            <Collapse 
            in={checked}
            {...(checked ? {timeout:7000} : {})}
            // collapsedSize={0}
            >
            <div className={classes.container}>
                {/* <h1 className={classes.title}>Welcome to <br/> Eyes <span className={classes.colorText}>Examination Centre</span> </h1> */}
                <h1 className={classes.title}>Book <br/> an <span className={classes.colorText}>appointment</span> </h1>
                <Scroll to = "appointment" smooth={true}>

                {/* Arrow button  */}
                <IconButton >
                    <ExpandMoreIcon className={classes.goDown} />
                </IconButton>
                </Scroll>
            </div>

            </Collapse>
        </div>
        </Collapse>
    )
}