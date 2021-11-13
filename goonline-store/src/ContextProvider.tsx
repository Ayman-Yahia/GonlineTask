import React,{useState} from "react";
import { CookieContext } from "./AppContext";
import Cookies from 'universal-cookie';
import {CartItemType} from "./App"

type Props = {
    children: React.ReactNode;
};
export const ContextProvider=({ children }: Props)=>{
    const[cart,setCart]=useState<CartItemType[]>([])
    const cookies = new Cookies();
        
    if(cart.length!==0){
        cookies.set("Cart", cart, { path: '/', maxAge: 60 * 60 * 24 * 365, });
    }
    return (
        <CookieContext.Provider value={{ cookies,cart,setCart }}>
            {children}
        </CookieContext.Provider>
    );
}
