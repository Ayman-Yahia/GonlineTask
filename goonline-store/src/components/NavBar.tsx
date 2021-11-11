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
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
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
      fontSize: "1.3rem",
      marginRight:"0.5rem",
      marginTop:"1.5%",
      // verticalAlign:"center",
      "&:hover": {
        color: "yellow",
      },
    },
    link1: {
      textDecoration: "none",
      color: "white",
      fontSize: "1rem",
      fontWeight:"bold",
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
    const avatarStyle={backgroundColor:'#1bbd7e',margin:"0 0.5rem",cursor:"pointer"}
    const navigate = useNavigate();
    const handleLogout=():void=>{
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
              <Link  to="/store" className={classes.link}>mor_2314</Link>
              <Avatar style={avatarStyle}><AccountCircleIcon/></Avatar>
              <Badge badgeContent={0} color='error' style={{marginTop:"0.5rem",cursor:"pointer"}} onClick={()=>navigate("/cart")}>
                <AddShoppingCartIcon />
              </Badge>
              <Button onClick={handleLogout} className={classes.link1}>Logout</Button>
            </div>
          </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
    )
}

export default NavBar
