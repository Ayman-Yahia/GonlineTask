import React, { FC ,useContext} from 'react'
import Button from "@material-ui/core/Button";
import {useNavigate} from 'react-router-dom';
import {CartItemType} from '../App'
import {CookieContext} from '../AppContext'
import { Wrapper } from './styling/Card.styles';

interface props{
    product:CartItemType
}
const ProductCard:FC<props> = ({product}) => {
    const {cookies,setCart}=useContext(CookieContext)
    const navigate = useNavigate();
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
