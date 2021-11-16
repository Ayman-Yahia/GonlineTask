import React, { FC ,useContext,useEffect,useState} from 'react'
import CartItem from './CartItem'
import { Wrapper } from './styling/Cart.styles';
import { CartItemType } from '../App';
import {CookieContext} from '../AppContext'
import NavBar from './NavBar';
import {useNavigate} from 'react-router-dom';

const Cart:FC = () => {
    const navigate = useNavigate();
    const [open,setOpen]=useState<boolean>(false)
    const {cookies,setCart}=useContext(CookieContext)
    useEffect(()=>{
      if (!cookies.get("StoreId")) {
        navigate("/")
    }
    },[])
    const addToCart = (clickedItem: CartItemType) => {
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
    const handleRemoveFromCart = (id: number) => {
      cookies.set("Cart",(cookies.get("Cart").reduce((ack:CartItemType[], item:CartItemType) => {
          if (item.id === id) {
            if (item.amount === 1) return ack;
            return [...ack, { ...item, amount: item.amount - 1 }];
          } else {
            return [...ack, item];
          }
        }, [] as CartItemType[])
      )
      )
      setCart(cookies.get("Cart"))
    }

    const handleClickOpen = ():void => {
      setOpen(!open);
    };
    var total:number=0;
    cookies.get("Cart").forEach((element:CartItemType) => {
      total+=(element.amount*element.price)
    })
    return (
        <>
            <NavBar/>
            <Wrapper>
            <h2>Your Shopping Cart</h2>
            {cookies.get("Cart").length === 0 ? <p>No items in cart.</p> : null}
            {cookies.get("Cart").map((item:CartItemType) => (
            <CartItem
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={handleRemoveFromCart}
                deleteItem={handleClickOpen}
                openP={open}
            />
            ))}
            <h2>Total: ${total}</h2>
        </Wrapper>
      </>
    )
}

export default Cart
