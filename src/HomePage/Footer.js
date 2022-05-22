import React from "react";
import "../style/FooterStyling.css"
import About2 from "./AboutUs"
import { makeStyles } from '@material-ui/core/styles';
import CallIcon from "@material-ui/icons/Call"
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) => ({
	icon: {
        color: ' lightgrey',
        fontSize: '5rem',
		cursor: 'pointer',
		'&:hover': {
		  color: "lightskyblue",
	   },
	   margin:"0px 15px 0px 0px" ,
	   
        
      },
	  iconFollow : {
		color: ' lightgrey',
        fontSize: '5rem',
		cursor: 'pointer',
		'&:hover': {
		  color: "lightskyblue",
	   },
	   padding: '5px 5px 5px 5px',
	  }
}));

export default function Footer(){
	const classes = useStyles();
    return(
		<div>
				<section>
				<h1>My Eyes</h1>
				<h3 > Please hover over the circle below to get info you need</h3>
				</section>
				<div className="footer">
				<div id="button">
				</div>
				<div id="container">
				<div id="cont">
				<div className="footer_center">
					<h3><CallIcon className={classes.icon} /> 010-1234567</h3>
					<h3><MailIcon className={classes.icon}/> MyEyes@gmail.com</h3>
					<h3><LocationOnIcon className={classes.icon}/> KristianStad , Sweden </h3>
					<h3><InstagramIcon className={classes.iconFollow} /> <FacebookIcon className={classes.iconFollow}/> <TwitterIcon className={classes.iconFollow}/> <WhatsAppIcon className={classes.iconFollow}/> <GitHubIcon className={classes.iconFollow}/> </h3>
				</div>
				</div>
				</div>
				</div>
			</div>
    )
}