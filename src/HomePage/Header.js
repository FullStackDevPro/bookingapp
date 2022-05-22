import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from "@material-ui/icons/Sort"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import GroupsIcon from "@material-ui/icons/PeopleOutline"
import FilterListIcon from '@material-ui/icons/FilterList';
import HomeIcon from "@material-ui/icons/Home";
import {Link as Scroll} from "react-scroll";
import eaysImage from "../assets/eyeglass-colors.jpg"
import LogInPage from "./Form"
import ShowServices from "./ShowServices"
import "../style/TextAnimation.css"
import About2 from "./About2"
import FooterPart from "./Footer"



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
        width: '100%',
        margin: '0 auto',
      },
      appbarTitle: {
        flexGrow: '1',
        color:" black",
        // color:"black",
        fontSize: '2rem',
        fontFamily: 'Nunito',
        fontWeight: 'bold',
      },
      icon: {
        color: ' lightblue',
        fontSize: '4rem',
        '&:hover': {
          color: "black",
         },
        
      },
      colorText: {
        // color: '#5AFF3D',
        color: 'lightblue',
        fontSize: '5rem',
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
      h1Color :{
        color : " lightblue"
      }
  }));

export default function Header({state}){
    const classes = useStyles();
    const [checked,setChecked] = useState(false);
    useEffect(()=> {
        setChecked(true)
    },[])

    const TextShow = ()=>{
      return (
        <section class="rw-wrapper">

        <div class="rw-words rw-words-1">
          <span className='spanStyle'>Welcome to the most famous Eyes Examination</span>
          <span className='spanStyle'>Book an appointment quickly & easily</span>
          <span className='spanStyle'>Up to 30 % on all type of glasses</span>
          <span className='spanStyle'>Free eye examination children 8-12 years</span>
          <span className='spanStyle'>Get a detailed control recipe </span>
          <span className='spanStyle'>Get a free glasses by buying sunglasses </span>
        </div>
        </section>
      )
    }

    return (
      <div>
        <Collapse 
        in={checked}
        {...(checked ? {timeout:2000} : {})}
        // collapsedSize={0}
        >
        <div className={classes.root} id = "header">
            <AppBar className={classes.appbar} elevation = {15}>
                <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle}> My <span className={classes.colorText}>Eyes</span></h1>
                <h1 className={classes.appbarTitle}> Book an appointment quickly <span className={classes.colorText}>& </span> easily online</h1>
                <Scroll to = "header" smooth={true}>
                  <IconButton>
                    <HomeIcon className={classes.icon} />
                    <h1 className={classes.h1Color}>Home</h1>
                </IconButton>
                </Scroll>
                
                <Scroll to = "signIn/signUp" smooth={true}>
                  <IconButton>
                    <LockOutlinedIcon className={classes.icon} />
                    <h1 className={classes.h1Color}>Log In</h1>
                </IconButton>
                </Scroll>

                <Scroll to = "show-services" smooth={true}>
                  <IconButton>
                    <FilterListIcon className={classes.icon} />
                    <h1 className={classes.h1Color} >Services</h1>
                </IconButton>
                </Scroll>

                <Scroll to = "About-us-page" smooth={true}>
                  <IconButton>
                    <GroupsIcon className={classes.icon} />
                    <h1  className={classes.h1Color}>About Us</h1>
                </IconButton>
                </Scroll>

                </Toolbar>
            </AppBar>
            <TextShow/>
            <Collapse 
            in={checked}
            {...(checked ? {timeout:4000} : {})}
            // collapsedSize={0}
            >
            {/* <div className={classes.container}>
                <h2 className={classes.appbarTitle}>Welcome to Eyes <span className={classes.colorText}>Examination Centre</span> </h2>
                <h1 className={classes.title}>Book <br/> an <span className={classes.colorText}>appointment for examination</span> </h1>
                <Scroll to = "signIn/signUp" smooth={true}>
                <IconButton >
                    <ExpandMoreIcon className={classes.goDown} />
                </IconButton>
                </Scroll>
            </div> */}
            </Collapse>
        </div>
        </Collapse>
        <LogInPage/>
        <ShowServices/>
        <About2/>
        <FooterPart/>
        </div>
    )
}