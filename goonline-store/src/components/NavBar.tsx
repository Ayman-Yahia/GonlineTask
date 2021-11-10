import React, { FC } from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Grid,
  } from "@material-ui/core";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Avatar} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    title:{
      fontSize:"1.5rem",
      verticalAlign:"center",
      marginTop:"15%"

    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "1.5rem",
      marginRight:"0.5rem",
      verticalAlign:"center",
      "&:hover": {
        color: "yellow",
      },
    },
    items:{
      display:"flex",
    }
  }));
const NavBar:FC = () => {
    const classes = useStyles();
    const avatarStyle={backgroundColor:'#1bbd7e'}
    return (
        <AppBar position="static">
        <Toolbar>
        <Grid
          justifyContent="space-between" 
          container 
          spacing={10}
        >
          <Grid item>
            <Typography >
              <span  className={classes.title}>Goonline Store</span>
            </Typography>
          </Grid>
          <Grid item>
            <div className={classes.items}>
              <Link  to="/store" className={classes.link}>username</Link>
              <Avatar style={avatarStyle}><AccountCircleIcon/></Avatar>
            </div>
          </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
    )
}

export default NavBar
