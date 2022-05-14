import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse ,IconButton} from '@material-ui/core';
// import eaysImage from "../assets/m.jpg"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import {Link as Scroll} from "react-scroll";



const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.3)',
    margin: '20px',
  },
  media: {
    height: 40,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '5rem',
    color: 'black',
    borderBottom:"1px solid white"
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '2.1rem',
    // color: 'rgba(0,0,0,0.5)',
    color : "wheat",
    fontWeight: 'bold',
  },
  container: {
    textAlign: 'center',
  },
  titleScroll: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  colorText: {
    color: '#5AFF3D',
  },
  goDown: {
    color: '#5AFF3D',
    fontSize: '5rem',
  },
});

export default function ImageCard({ info, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 9000 } : {})}>
      <Card className={classes.root}>
        
        <CardMedia
          className={classes.media}
          // image={eaysImage}
          // title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom 
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {info.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {info.description}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}
