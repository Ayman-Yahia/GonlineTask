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
import { Wrapper } from './styling/Card.styles';

const useStyles = makeStyles({
    root: {
      minWidth: 200,
      minHeight:"100vh"
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
    product:CartItemType
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
      <Wrapper>
      <img src={product.image} alt={product.title} />
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
      </div>
      <div className="buttons">
        <Button onClick={()=>{
                navigate('/store/'+product.id)
            }}>View Profuct</Button>
        <Button onClick={() => handleAddToCart(product)} >Add to cart</Button>
      </div>

    </Wrapper>
    )
}

export default ProductCard
