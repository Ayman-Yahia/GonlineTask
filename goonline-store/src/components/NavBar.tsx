import React, {FC,useContext} from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
  } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import LogoutIcon from '@mui/icons-material/Logout';
import Badge from '@material-ui/core/Badge';
import { Avatar} from '@material-ui/core'
import {useNavigate} from 'react-router-dom';
import {CartItemType} from "../App"
import {CookieContext} from '../AppContext'
const useStyles = makeStyles((theme) => ({
  appbar: {
    position: "sticky",
    bottom: 0,
    top: 0,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  search: {
    display: "flex",
    gap: "5px",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    padding: "5px",
  },
  icons: {
    display: "flex",
    alignItems: "center",
  },
  badge: {
    marginRight: theme.spacing(2),
    cursor:"pointer"
  },
  log:{
    cursor:"pointer"
  },
  searchBtn: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }
}));
const NavBar:FC = () => {
    const {cookies}=useContext(CookieContext) 
    const classes = useStyles();
    const avatarStyle={backgroundColor:'#1bbd7e',margin:"0 0.5rem",cursor:"pointer"}
    const navigate = useNavigate();
    var x:number=0;
      cookies.get("Cart").forEach((element:CartItemType) => {
        x+=element.amount
      })
    const handleLogout=():void=>{
      cookies.remove("StoreId");
      navigate("/")
    }    
    return (
      <AppBar position="static" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" onClick={()=>navigate("/store")} style={{cursor:"pointer"}}>Goonline Store</Typography>
        <div className={classes.icons}>
          <Badge badgeContent={x} color='error' className={classes.badge} onClick={()=>navigate("/cart")}>
                <AddShoppingCartIcon />
          </Badge>
          <Avatar style={avatarStyle} onClick={()=>navigate("/store")}><AccountCircleIcon/></Avatar>
          <Typography variant="h6" onClick={handleLogout} className={classes.log}>Logout</Typography>
        </div>
      </Toolbar>
    </AppBar>
    )
}

export default NavBar
