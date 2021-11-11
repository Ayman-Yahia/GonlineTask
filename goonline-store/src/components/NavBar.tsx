import React, { FC } from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Grid,
    Button
  } from "@material-ui/core";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Avatar} from '@material-ui/core'
import {useNavigate} from 'react-router-dom';
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
    link1: {
      textDecoration: "none",
      color: "white",
      fontSize: "1.5rem",
      marginLeft:"0.5rem",
      verticalAlign:"center",
      "&:hover": {
        color: "red",
      },
    },
    items:{
      display:"flex",
      justifyContent:"space-between"
    }
  }));
const NavBar:FC = () => {
    const classes = useStyles();
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const navigate = useNavigate();
    const handleLogout=():any=>{
      Cookies.remove("StoreId");
      navigate("/")
    }
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
              <Button onClick={handleLogout} className={classes.link1}>Logout</Button>
            </div>
          </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
    )
}

export default NavBar
