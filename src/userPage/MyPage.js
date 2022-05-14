import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Menu, Toolbar } from '@material-ui/core';
// import SortIcon from '@mui/icons-material/Sort';
// import SortIcon from "@material-ui/icons/Sort"
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from "@material-ui/core/MenuItem";
import CallIcon from '@material-ui/icons/Call';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CalendarMonthIcon from '@material-ui/icons/CalendarToday';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import {Link as Scroll} from "react-scroll";
import image from "../assets/15.jpg"
import Booking from "../components/Booking"
import { hover } from 'glamor';
// import Option from "./Options"
import Login from "../components/Login"
import ContactUs from "./ContactForm"
import ToShowUserBooking from "./UserBooking"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
        backgroundImage: `url(${image})`,
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
        cursor: 'pointer',
        '&:hover': {
          color: "wheat",
       },
      },
      icon2 :{
        color : "green",
        fontSize : '6rem',
        padding: '5px 5px 5px 5px',
        cursor: 'pointer',
        '&:hover': {
          color: "black",
       },
      },

      colorText: {
        // color: '#5AFF3D',
        color: 'wheat',
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
      colorTextMenu:{
        color: 'black',
        fontSize: '2rem',
        fontWeight: 'bold',
        '&:hover': {
          color: "white",
       },
      }
  }));

  
export default function Header({user}){
    const classes = useStyles();
    const [checked,setChecked] = useState(false);
    const [contactForm,setcontactForm] = useState(null);
    const [booking,setBooking] = useState(null);
    const [showBooking,setShowBookin] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    
    useEffect(()=> {
        setChecked(true)
        
    },[])

    const handleClose = (e) => {
      setSelectedItem(e.target.innerText)
      if(e.target.innerText == "Your Booking"){
        setcontactForm(true)
        setShowBookin(false)
        setBooking(true)
      }else if(e.target.innerText == "Book"){
          setcontactForm(true)
          setShowBookin(true)
          setBooking(false)
      }else if(e.target.innerText == "Contact Us"){
          setcontactForm(false)
          setShowBookin(true)
          setBooking(true)
      }else{
        setSelectedItem(null)
      }

      console.log("Sellected Value : ",e.target.innerText)
      console.log("booking : ",booking,"show booking : ",showBooking,"contact Form :",contactForm)

      setAnchorEl(null);
    };

    // const handleClose = (e) => {
    //   setSelectedItem(e.target.innerText)
    //   console.log(selectedItem)
    //   console.log(booking,showBooking,contactForm)
    //   if(e.target.innerText == "Contact Us"){
    //     setBooking(true)
    //     setcontactForm(true)
    //   }else{
    //     setBooking(false)
    //     setcontactForm(false) 
    //   }
    //   setAnchorEl(null);
    // };

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    return (
        <Collapse 
        in={checked}
        {...(checked ? {timeout:4000} : {})}
        // collapsedSize={0}
        >
        <div className={classes.root} id = "userFirstPage">
            <AppBar className={classes.appbar} elevation = {20}>
                <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle}> My <span className={classes.colorText}>Eyes</span></h1>
                <h2 className={classes.appbarTitle}><span className={classes.colorText}>Welcome {user} </span></h2>
                <IconButton title='Menu'  aria-controls='Menu' aria-haspopup ="true" onClick={handleClick}>
                    <h1>Menu</h1>
                    <MenuIcon  className={classes.icon} />
                </IconButton>
                <Menu 
                PaperProps={{  
                  style: {  
                    width: 300,
                    height:250, 
                    borderradius:"30px" ,
                    backgroundColor:"wheat",
                    margin:"60px" ,
                    color: 'black',
                    fontSize: '5rem',
                    fontFamily: 'Nunito',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    '&:hover': {
                      color: "green",
                   },

                  },  
               }}
                keepMounted 
                anchorEl={anchorEl}
                onClose={handleClose}
                open={Boolean(anchorEl)}
                >
                  <MenuItem onClick={handleClose} className={classes.colorTextMenu}> <CalendarMonthIcon className={classes.icon2}/>Book</MenuItem>
                  <MenuItem onClick={handleClose} className={classes.colorTextMenu}> <CallIcon className={classes.icon2}/> Contact Us </MenuItem>
                  <MenuItem onClick={handleClose} className={classes.colorTextMenu}> <VisibilityIcon className={classes.icon2}/> Your Booking</MenuItem>
                </Menu>

                <IconButton  title='LogOut'>
                  <h1 >Log Out</h1>
                    <LockOpenOutlinedIcon  className={classes.icon2} />
                </IconButton>
                
                </Toolbar>
            </AppBar>

            <div className={classes.container}>
              {showBooking == false ? <ToShowUserBooking/> : null}
              {booking == false ? <Booking/> : null}
              {contactForm == false ? <ContactUs/> : null}
                {/* {selectedItem == "Book" ? <Booking/> : null} */}
                {/* {showBooking == false ? <ToShowUserBooking/> : null } */}
                {/* {booking ? <ContactUs/> : <Booking/> } */}
                {/* {testLogin ? <Login/> : null} */}
                
  
            </div>
            
        </div>
        </Collapse>
    )
}