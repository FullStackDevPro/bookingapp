import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import useWindowPositio from "../hook/useWindowPosition"
import eaysImage from "../assets/hx-hero-gaming-eyewear-spectre-line-prod-page-lg.jpg"
import BoxesPart from "./BoxesServices"
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
            <Collapse in={checked} {...(checked ? { timeout: 8000 } : {})}>
                <BoxesPart/>
            </Collapse>
        </div>
    )
}