import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Menu, Toolbar } from '@material-ui/core';
// import SortIcon from '@mui/icons-material/Sort';
// import SortIcon from "@material-ui/icons/Sort"
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from "@material-ui/core/MenuItem";
import CallIcon from '@material-ui/icons/Call';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import CalendarMonthIcon from '@material-ui/icons/CalendarToday';
import MailIcon from '@material-ui/icons/Mail';
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
import Footer from "../HomePage/Footer"
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        color:"white",
        fontSize: '4rem',
        fontFamily: 'Nunito',
        fontWeight: 'bold',
      },
      icon: {
        color: 'white',
        fontSize: '4rem',
        cursor: 'pointer',
        '&:hover': {
          color: "black",
       },
      },
      icon2 :{
        color : "white",
        fontSize : '6rem',
        padding: '5px 5px 5px 5px',
        cursor: 'pointer',
        '&:hover': {
          color: "black",
       },
      },

      colorText: {
        // color: '#5AFF3D',
        color: 'lighblue',
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
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bold',
        '&:hover': {
          color: "lightblue",
       },
      }
  }));

  
export default function Header(props){
    const route =useNavigate();
    const [userEmail,setUserEmail] = useState(props.user_email)
    const classes = useStyles();
    const [checked,setChecked] = useState(false);
    const [contactForm,setcontactForm] = useState(null);
    const [booking,setBooking] = useState(null);
    const [showBooking,setShowBookin] = useState(false);
    const [changePassword,setChangePassword] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [getUserEmail,setGetUserEmail] = useState()
    const [email_user,setEmail] = useState()
    
    useEffect(()=> {
        setChecked(true)
        get_email()
        disPlayMessageWelcome()
        
    },[])

    const handleClose = (e) => {
      setSelectedItem(e.target.innerText)
      if(e.target.innerText == "Your Booking"){
        setcontactForm(true)
        setChangePassword(true)
        setBooking(true)
        setShowBookin(false)
        console.log(userEmail)
        
      }else if(e.target.innerText == "Book"){
          setcontactForm(true)
          setShowBookin(true)
          setChangePassword(true)
          setBooking(false)
      }else if(e.target.innerText == "Contact Us"){
          setShowBookin(true)
          setBooking(true)
          setChangePassword(true)
          setcontactForm(false)
      }else if(e.target.innerText=="Change password"){
          setShowBookin(true)
          setBooking(true)
          setcontactForm(true)
          setChangePassword(false)
      }else{
        setSelectedItem(null)
      }

      console.log("Sellected Value : ",e.target.innerText)
      console.log("booking : ",booking,"show booking : ",showBooking,"contact Form :",contactForm)

      setAnchorEl(null);
    };

    const get_email = async()=>{
      // let usersEmail = await fetch("http://localhost:3000/api/user/email",{
        let usersEmail = await fetch("/api/user/email",{
        method :"get",
      })
      let res = await usersEmail.json()   
      setGetUserEmail(res)
      console.log(getUserEmail)
    
    }

    const disPlayMessage = ()=>{
      toast.info("Thanks for your visit and See you soon",
          {
          position:"top-center",
          theme:"colored",
          autoClose:4000,
          pauseOnHover: true,
          closeButton:true,
          hideProgressBar :true, 
      })
  }

  const disPlayMessageWelcome = ()=>{
    toast.info("Welcome to your page",
        {
        position:"top-center",
        theme:"colored",
        autoClose:3000,
        pauseOnHover: true,
        closeButton:true,
        hideProgressBar :true, 
    })
}

    const logOutEvent = async() => {
      console.log(getUserEmail[0].email)
      // let usersEmail = await fetch("http://localhost:3000/api/user/user-email",{
        let usersEmail = await fetch("/api/user/user-email",{
        method :"DELETE",
        body : JSON.stringify({email:getUserEmail[0].email}),
        headers: {
          'Content-Type':'application/json',
        },
      })
      
      let res = await usersEmail.json()    
      console.log(res)
      disPlayMessage()
      route("/")
    }
  
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
                <h2 className={classes.appbarTitle}><span className={classes.colorText}>Welcome {userEmail} </span></h2>
                <IconButton title='Menu'  aria-controls='Menu' aria-haspopup ="true" onClick={handleClick}>
                    <MenuIcon  className={classes.icon} />
                    <h1>Menu</h1>
                </IconButton>
                <Menu 
                PaperProps={{  
                  style: {  
                    width: 300,
                    height:280, 
                    borderradius:"30px" ,
                    backgroundColor:"rgba(0, 0,0, 0.7)",
                    margin:"60px" ,
                    color: 'white',
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
                  <MenuItem onClick={handleClose} className={classes.colorTextMenu}> <MailIcon className={classes.icon2}/> Contact Us </MenuItem>
                  <MenuItem onClick={handleClose} className={classes.colorTextMenu}> <VisibilityIcon className={classes.icon2}/> Your Booking</MenuItem>
                  {/* <MenuItem onClick={handleClose} className={classes.colorTextMenu}> <VpnKeyIcon className={classes.icon2}/> Change password</MenuItem> */}
                </Menu>

                {/* <IconButton  title='LogOut' onClick={()=>  route("/")}> */}
                <IconButton  title='LogOut' onClick={logOutEvent}>
                    <LockOpenOutlinedIcon  className={classes.icon2}  />
                    <h1 >Log Out</h1>
                </IconButton>
                
                </Toolbar>
            </AppBar>

            <div className={classes.container}>
              {showBooking == false ? <ToShowUserBooking/> : null}
              {booking == false ? <Booking/> : null}
              {contactForm == false ? <ContactUs/> : null}
              {/* {changePassword==false ? <ContactUs/> : null} */}
                {/* {booking ? <ContactUs/> : <Booking/> } */}
            </div>
            <ToastContainer  style={{fontSize : "14px", width : "80%"}}/>
        </div>
        </Collapse>
    )
}