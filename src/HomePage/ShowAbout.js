import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from "./ImageCard"
import Information from "./Info.js"
import useWindowPositio from "../hook/useWindowPosition"
import eaysImage from "../assets/111.jpg"


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${eaysImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
        },
      },
}));

export default function ShowAbout(){
    const classes = useStyles()
    const checked = useWindowPositio("header");
    return(  
        <div className={classes.root} id="show-about">
            
            <ImageCard info={Information[0]} checked={checked}/>
            <ImageCard info={Information[1]} checked={checked}/>
            <ImageCard info={Information[2]} checked={checked}/>
            <ImageCard info={Information[3]} checked={checked}/>
        
        </div>
    )
}