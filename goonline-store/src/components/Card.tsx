import React, { FC ,useContext} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {useNavigate} from 'react-router-dom';
import {CartItemType} from '../App'
import {CookieContext} from '../AppContext'
interface pro{
  id:number,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  rating:{
      rate:number,
      count:number
  }
}
const useStyles = makeStyles({
    root: {
      minWidth: 200
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    },
    title: {
      fontSize: 14,
      width:"100%",
    },
    pos: {
      marginBottom: 12
    }
  });
  interface props{
      product:any
  }
const ProductCard:FC<props> = ({product}) => {
    const {cookies,setCart}=useContext(CookieContext)
    const navigate = useNavigate();
    const classes = useStyles();
    const handleAddToCart = (clickedItem: CartItemType) => {
      // 1. Is the item already added in the cart?
        const isItemInCart = cookies.get("Cart").find((item:CartItemType)=> item.id === clickedItem.id);
        if (isItemInCart) {
          cookies.set("Cart", cookies.get("Cart").map((item:CartItemType) =>
            item.id === clickedItem.id
              ? { ...item, amount:item.amount+1 }
              : item
          )
          )
          setCart(cookies.get("Cart"))
        }else{
          // First time the item is added
          cookies.set("Cart",[...cookies.get("Cart"), { ...clickedItem, amount: 1 }])  
          setCart(cookies.get("Cart"))
        }
    
    };
    return (
        <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            
          >
          
          <CardMedia component="img" src={product.image} style={{width:"100%",height:"50vh",margin:"0 auto"}}/>
          </Typography>
          <Typography variant="h5" component="h2">
            {product.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          {product.price}$
          </Typography>
          <Typography variant="body2" component="p">
          {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={()=>{
              navigate('/store/'+product.id)
          }}>view product</Button>
          <Button size="small" onClick={()=>handleAddToCart(product)}>Add to Cart</Button>
        </CardActions>
      </Card>
    )
}

export default ProductCard
