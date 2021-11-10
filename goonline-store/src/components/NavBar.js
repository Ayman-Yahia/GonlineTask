import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    Box
  } from "@material-ui/core";
import { Link } from "react-router-dom";

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Avatar} from '@material-ui/core'

  const useStyles = makeStyles((theme) => ({
    navlinks: {
    },
   logo: {
      cursor: "pointer",
      float:"left",
      width:"50%",
      textAlign:"left"
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      marginRight:"0.5rem",
      verticalAlign:"center",
      textAlign:"right",
      marginLeft: theme.spacing(40),
      "&:hover": {
        color: "yellow",
      },
    },
    avatarStyle:{
        marginRight:0
    }
  }));
export default function NavBar() {
const classes = useStyles();
const avatarStyle={backgroundColor:'#1bbd7e'}
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
    <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Goonline Store
        </Typography>

          <Link to="/store" className={classes.link}>
            username
          </Link>
          <Avatar style={avatarStyle}><AccountCircleIcon/></Avatar>
    </Toolbar>
  </AppBar>
  </Box>
  );
}