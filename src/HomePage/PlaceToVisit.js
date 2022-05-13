import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from "./ImageCard"
import Places from "./Places.js"
import useWindowPositio from "../hook/useWindowPosition"
import eaysImage from "../assets/pexels-dids-1499477.jpg"


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

export default function PlaceToVisit(){
    const classes = useStyles()
    const checked = useWindowPositio("header");
    return(
        <div className={classes.root} id="place-to-visit">
            <ImageCard place={Places[0]} checked={checked}/>
            <ImageCard place={Places[1]} checked={checked}/>
            <ImageCard place={Places[2]} checked={checked}/>
            <ImageCard place={Places[3]} checked={checked}/>
            <ImageCard place={Places[4]} checked={checked}/>
        </div>
    )
}