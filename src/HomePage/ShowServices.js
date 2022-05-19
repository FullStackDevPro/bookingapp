import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Service from "./Services"
import Information from "./Info.js"
import useWindowPositio from "../hook/useWindowPosition"
import eaysImage from "../assets/hx-hero-gaming-eyewear-spectre-line-prod-page-lg.jpg"
import BoxesPart from "./Boxes"
import { Collapse ,IconButton} from '@material-ui/core';

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

export default function ShowServices({state}){
    const classes = useStyles()
    const checked = useWindowPositio("header");
    return(  
        // <div className={classes.root} id="show-about">
        <div className={classes.root} id="show-services">
            {/* <Service info={Information[0]} checked={checked}/>
            <Service info={Information[1]} checked={checked}/>
            <Service info={Information[2]} checked={checked}/>
            <Service info={Information[3]} checked={checked}/> */}
            <Collapse in={checked} {...(checked ? { timeout: 6000 } : {})}>
                <BoxesPart/>
            </Collapse>
                
                
        </div>
    )
}